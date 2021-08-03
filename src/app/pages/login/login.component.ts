import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebService } from 'app/services/web.service';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean = false;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) {
    this.checkLogin();
    this.signInForm();
  }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.webService.getLocalData("micasaluxToken") && this.webService.getLocalData("adminData")) {
      this.router.navigate(['/dashboard']);
    }
  }

  signInForm(){
    this.loginForm = this.FB.group({
     Email: ['admin@micasalux.com',[Validators.required]],
     Password: ['admin@123',[Validators.required]]
    });
  }

  submitLoginForm(){
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("login"), body: this.loginForm.value, contentType: true }).then(res => {
      if (res["status"]) {
        console.log("res success");
        window.location.reload();
        let userData = {...res["data"],adminLogin:true};
        this.webService.saveLocalData("adminData", userData);
        this.webService.saveLocalData("micasaluxToken", res["token"]);
        this.webService.sendLoggedData(userData);
        this.toastr.success("Welcome","login Success")
        this.router.navigate(['/dashboard']);
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }


}
