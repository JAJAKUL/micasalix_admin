import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';
import { ConfirmPasswordValidator } from '../../services/confirm-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm: FormGroup;
  submitted: Boolean = false;
  passWordPattern= new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,50}$/);

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.createChangePasswordForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ChangePasswordForm.controls[controlName].hasError(errorName);
  }

  createChangePasswordForm(){
    this.ChangePasswordForm = this.FB.group({
      CurrentPassword: ['',[Validators.required]],
      NewPasswrod: ['',[Validators.required, Validators.pattern(this.passWordPattern)]],
      ConfirmPassword: ['',[Validators.required]]
    },{
      validator: ConfirmPasswordValidator("NewPasswrod", "ConfirmPassword")
    });
  }



  submitChangePasswrdForm() {
    if (this.ChangePasswordForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("changePassword"), body: this.ChangePasswordForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.ChangePasswordForm.reset();
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
