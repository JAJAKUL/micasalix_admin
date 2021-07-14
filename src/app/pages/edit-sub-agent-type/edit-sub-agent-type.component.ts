import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-sub-agent-type',
  templateUrl: './edit-sub-agent-type.component.html',
  styleUrls: ['./edit-sub-agent-type.component.css']
})
export class EditSubAgentTypeComponent implements OnInit {
  agentTypeForm: FormGroup;
  submitted: Boolean = false;
  agentTypeList: any;
  count: number = 0;
  subAgentTypeId: any;
  subAgentTypeDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activeRoute: ActivatedRoute 
  ) { 
    this.activeRoute.params.subscribe((param)=>{
      this.subAgentTypeId = param.id;
      console.log(param)
    })
    this.getAgentTypeList();
    this.getAgentTypeDetails();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agentTypeForm.controls[controlName].hasError(errorName);
  }

  getAgentTypeDetails() {
    this.webService.createGet({ url: BaseUrl.apiUrl("subAgentTypeDetails")+`?Id=`+this.subAgentTypeId, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.subAgentTypeDetails = res["data"];
        this.createagentTypeForm();
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
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
      agent_type_id:[this.subAgentTypeDetails && this.subAgentTypeDetails.agent_type_id ? this.subAgentTypeDetails.agent_type_id : "",[Validators.required]],
      sub_agent_type_name: [this.subAgentTypeDetails && this.subAgentTypeDetails.sub_agent_type_name ? this.subAgentTypeDetails.sub_agent_type_name : "",[Validators.required]],
      sub_agent_type_description: [this.subAgentTypeDetails && this.subAgentTypeDetails.sub_agent_type_description ? this.subAgentTypeDetails.sub_agent_type_description : "",[Validators.required]]
    });
  }


  submitChangePasswrdForm() {
    console.log("agentTypeForm===",this.agentTypeForm);
    this.submitted = true;
    if (this.agentTypeForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("editSubAgentType")+`?subAgentTypeId=`+this.subAgentTypeId, body: this.agentTypeForm.value, contentType: true, loading: true }).then(res => {
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
