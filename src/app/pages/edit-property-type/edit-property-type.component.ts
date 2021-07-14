import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-property-type',
  templateUrl: './edit-property-type.component.html',
  styleUrls: ['./edit-property-type.component.css']
})
export class EditPropertyTypeComponent implements OnInit {
  propertyCategoryForm: FormGroup;
  submitted: Boolean = false;
  propertyTypeId: any;
  propertyTypeDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activeRoute: ActivatedRoute 
  ) { 
    this.activeRoute.params.subscribe((param)=>{
      this.propertyTypeId = param.id;
      console.log(param)
    })
    this.getPropertyTypeDetails();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.propertyCategoryForm.controls[controlName].hasError(errorName);
  }

  createPropertyCategoryForm(){
    this.propertyCategoryForm = this.FB.group({
      property_type_name: [this.propertyTypeDetails && this.propertyTypeDetails.property_type_name ? this.propertyTypeDetails.property_type_name : "",[Validators.required]],
      property_type_description: [this.propertyTypeDetails && this.propertyTypeDetails.property_type_description ? this.propertyTypeDetails.property_type_description : "",[Validators.required]]
    });
  }

  getPropertyTypeDetails() {
    this.webService.createGet({ url: BaseUrl.apiUrl("propertyTypeDetails")+`?Id=`+this.propertyTypeId, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.propertyTypeDetails = res["data"];
        this.createPropertyCategoryForm();
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }



  submitPropertyCategoryForm() {
    this.submitted = true;
    if (this.propertyCategoryForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("editPropertyType")+`?propertyId=`+this.propertyTypeId, body: this.propertyCategoryForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.toastr.success(res["message"],"Success");
        this.router.navigate(["/property-type-list"])
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
