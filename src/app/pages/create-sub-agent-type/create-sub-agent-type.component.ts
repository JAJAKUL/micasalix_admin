import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-create-sub-agent-type',
  templateUrl: './create-sub-agent-type.component.html',
  styleUrls: ['./create-sub-agent-type.component.css']
})
export class CreateSubAgentTypeComponent implements OnInit {
  agentTypeForm: FormGroup;
  submitted: Boolean = false;
  agentTypeList: any;
  count: number = 0;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.getAgentTypeList();
    this.createagentTypeForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agentTypeForm.controls[controlName].hasError(errorName);
  }

  getAgentTypeList = () => {
    this.webService.createGet({url: BaseUrl.apiUrl("agentTypeList"), contentType: true }).then(res => {
      if (res["status"]) {
        this.agentTypeList = res['data'].docs;
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  createagentTypeForm(){
    this.agentTypeForm = this.FB.group({
      agent_type_id:['',[Validators.required]],
      sub_agent_type_name: ['',[Validators.required]],
      sub_agent_type_description: ['',[Validators.required]]
    });
  }


  submitChangePasswrdForm() {
    console.log("agentTypeForm===",this.agentTypeForm);
    this.submitted = true;
    if (this.agentTypeForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("addSubAgentType"), body: this.agentTypeForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.router.navigate(["/sub-agent-type-list"])
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
