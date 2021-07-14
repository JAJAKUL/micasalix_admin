import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  createAgent: FormGroup;
  submitted: Boolean = false;
  agentTypeList: any;
  agentTypeCount: number = 0;
  subAgentTypeList: any;
  SubAgentTypecount: number = 0;
  agentDetails: any;
  agentTypeId: any;

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
    this.getUserDetails();
    // this.getAgentTypeList();
  }

  ngOnInit(): void {
    
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.createAgent.controls[controlName].hasError(errorName);
  }

  async getUserDetails() {
    this.webService.createGet({url: BaseUrl.apiUrl("userDetails")+`?id=${this.agentTypeId}`, contentType: true }).then(res => {
      if (res["status"]) {
        this.agentDetails = res['data'];
        // this.getSubAgentTypeList(this.agentDetails.AgentType);
        this.createAgentForm();
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  createAgentForm(){
    this.createAgent = this.FB.group({
      Email: [this.agentDetails && this.agentDetails.Email ? this.agentDetails.Email : '',[Validators.required]],
      FullName: [this.agentDetails && this.agentDetails.FullName ? this.agentDetails.FullName : '',[Validators.required]],
      UserType: [this.agentDetails && this.agentDetails.UserType ? this.agentDetails.UserType : '',[Validators.required]],
      Phone: [this.agentDetails && this.agentDetails.Phone ? this.agentDetails.Phone : '',[Validators.required]],
      // AgentType: [this.agentDetails && this.agentDetails.AgentType ? this.agentDetails.AgentType : '',[Validators.required]],
      // subAgentType: [this.agentDetails && this.agentDetails.subAgentType ? this.agentDetails.subAgentType : '',[Validators.required]]
    });
  }

  submitForm(){
    this.submitted = true;
    if (this.createAgent.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("updateUser")+`?userId=${this.agentDetails._id}`, body: this.createAgent.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.toastr.success(res["message"],"Success");
        this.router.navigate(["/user-list"]);
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  selectAgentType(e){
    this.getSubAgentTypeList(e);
  }

  getAgentTypeList = () => {
    this.webService.createGet({url: BaseUrl.userApiUrl("agentTypeList"), contentType: true }).then(res => {
      if (res["status"]) {
        this.agentTypeList = res['data'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  getSubAgentTypeList = (id) => {
    this.webService.createGet({ url: BaseUrl.userApiUrl("sub_Agent_type_list")+"?agentTypeId="+id, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.subAgentTypeList = res["data"];
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
