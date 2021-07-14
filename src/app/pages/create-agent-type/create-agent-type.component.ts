import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-create-agent-type',
  templateUrl: './create-agent-type.component.html',
  styleUrls: ['./create-agent-type.component.css']
})
export class CreateAgentTypeComponent implements OnInit {
  agentTypeForm: FormGroup;
  submitted: Boolean = false;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.createagentTypeForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.agentTypeForm.controls[controlName].hasError(errorName);
  }

  createagentTypeForm(){
    this.agentTypeForm = this.FB.group({
      agent_type_name: ['',[Validators.required]],
      agent_type_description: ['',[Validators.required]]
    });
  }



  submitChangePasswrdForm() {
    this.submitted = true;
    if (this.agentTypeForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("addAgentType"), body: this.agentTypeForm.value, contentType: true, loading: true }).then(res => {
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
