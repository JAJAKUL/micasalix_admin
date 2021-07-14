import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted: Boolean = false;
  adminDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.getAdminDetails();
  }

  ngOnInit(): void {
    
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.profileForm.controls[controlName].hasError(errorName);
  }

  createProfileForm(){
    this.profileForm = this.FB.group({
      FirstName: [this.adminDetails && this.adminDetails.FirstName ? this.adminDetails.FirstName : "" ,[Validators.required]],
      LastName: [this.adminDetails && this.adminDetails.LastName ? this.adminDetails.LastName : "",[Validators.required]],
      Company: [this.adminDetails && this.adminDetails.Company ? this.adminDetails.Company : "",[Validators.required]],
      Address: [this.adminDetails && this.adminDetails.Address ? this.adminDetails.Address : "",[Validators.required]],
      City: [this.adminDetails && this.adminDetails.City ? this.adminDetails.City : "",[Validators.required]],
      PostalCode: [this.adminDetails && this.adminDetails.PostalCode ? this.adminDetails.PostalCode : "",[Validators.required]],
      Country:[this.adminDetails && this.adminDetails.Country ? this.adminDetails.Country : "",[Validators.required]],
      AboutMe: [this.adminDetails && this.adminDetails.AboutMe ? this.adminDetails.AboutMe : "",[Validators.required]],
      Email: [this.adminDetails && this.adminDetails.Email ? this.adminDetails.Email : "",[Validators.required]]
    });
  }

  getAdminDetails() {
    this.webService.createGet({ url: BaseUrl.apiUrl("ownDetails"), contentType: true }).then(res => {
      if (res["status"]) {
        this.adminDetails = res["data"];
        if(this.adminDetails.Picture) {
          this.adminDetails.Picture = BaseUrl.baseUrl+'/'+this.adminDetails.Picture
        } else {
          this.adminDetails.Picture = "assets/img/default-avatar.png";
        }
        this.createProfileForm();
        // this.toastr.success(res["message"],"Success")
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  submitProfile() {
    this.submitted = true;
    if (this.profileForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("updateProfile"), body: this.profileForm.value, contentType: true }).then(res => {
      if (res["status"]) {
        this.adminDetails = res["data"];
        if(this.adminDetails.Picture) {
          this.adminDetails.Picture = BaseUrl.baseUrl+'/'+this.adminDetails.Picture
        } else {
          this.adminDetails.Picture = "assets/img/default-avatar.png";
        }
        this.toastr.success(res["message"],"Success")
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  onSelectedProfileImage(event: File[]): void{
    console.log("click called")
    if (event["target"].files.length > 0) {
      const file = event["target"].files[0];
      let formData = new FormData();
      formData.append('Picture', file);
      this.webService.createPostWithImage({ url: BaseUrl.apiUrl("addProfile"), body: formData, contentType: true, loading: true }).then(res => {
        if (res["status"]) {
          this.getAdminDetails();
          this.toastr.success(res["message"],"Success");
        }else{
          console.log("res error");
          this.toastr.error(res["message"],"Error")
        }
      });
    }
  }


}
