import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-agent-type',
  templateUrl: './edit-agent-type.component.html',
  styleUrls: ['./edit-agent-type.component.css']
})
export class EditAgentTypeComponent implements OnInit {
  agentTypeForm: FormGroup;
  submitted: Boolean = false;
  agentTypeId: any;
  agentTypeDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activeRoute: ActivatedRoute 
  ) { 
    this.activeRoute.params.subscribe((param)=>{
      this.agentTypeId = param.id;
      console.log(param)
    })
   this.getAgentTypeDetails(); 
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agentTypeForm.controls[controlName].hasError(errorName);
  }

  createagentTypeForm(){
    this.agentTypeForm = this.FB.group({
      agent_type_name: [this.agentTypeDetails && this.agentTypeDetails.agent_type_name ? this.agentTypeDetails.agent_type_name : "",[Validators.required]],
      agent_type_description: [this.agentTypeDetails && this.agentTypeDetails.agent_type_description ? this.agentTypeDetails.agent_type_description : "",[Validators.required]]
    });
  }

  getAgentTypeDetails() {
    this.webService.createGet({ url: BaseUrl.apiUrl("agentTypeDetails")+`?Id=`+this.agentTypeId, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.agentTypeDetails = res["data"];
        this.createagentTypeForm();
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }



  submitEditAgentType() {
    this.submitted = true;
    if (this.agentTypeForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("editAgentType")+`?agentTypeId=`+this.agentTypeId, body: this.agentTypeForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.router.navigate(["/agent-type-list"])
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }
}
