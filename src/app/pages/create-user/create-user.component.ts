import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createAgent: FormGroup;
  submitted: Boolean = false;
  agentTypeList: any;
  agentTypeCount: number = 0;
  subAgentTypeList: any;
  SubAgentTypecount: number = 0;
  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.createAgentForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.createAgent.controls[controlName].hasError(errorName);
  }

  createAgentForm(){
    this.createAgent = this.FB.group({
      Email: ['',[Validators.required]],
      FullName: ['',[Validators.required]],
      UserType: ['1',[Validators.required]],
      Phone: ['',[Validators.required]]
    });
  }

  submitForm(){
    this.submitted = true;
    if (this.createAgent.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("createAgent"), body: this.createAgent.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.toastr.success(res["message"],"Success");
        this.router.navigate(["/user-list"]);
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }



}
