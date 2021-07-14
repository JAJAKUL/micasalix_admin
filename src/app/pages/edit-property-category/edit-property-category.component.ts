import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-property-category',
  templateUrl: './edit-property-category.component.html',
  styleUrls: ['./edit-property-category.component.css']
})
export class EditPropertyCategoryComponent implements OnInit {
  propertyCategoryForm: FormGroup;
  submitted: Boolean = false;
  propertyCategoryId: any;
  propertyTypeDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activeRoute: ActivatedRoute 
  ) { 
    this.activeRoute.params.subscribe((param)=>{
      this.propertyCategoryId = param.id;
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
      property_category_name: [this.propertyTypeDetails && this.propertyTypeDetails.property_category_name ? this.propertyTypeDetails.property_category_name : "",[Validators.required]],
      property_category_description: [this.propertyTypeDetails && this.propertyTypeDetails.property_category_description ? this.propertyTypeDetails.property_category_description : "",[Validators.required]]
    });
  }

  getPropertyTypeDetails() {
    this.webService.createGet({ url: BaseUrl.apiUrl("propertyCategoryTypeDetails")+`?Id=`+this.propertyCategoryId, contentType: true, loading: true }).then(res => {
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
    this.webService.createPost({ url: BaseUrl.apiUrl("editPropertyCategory")+`?propertyId=`+this.propertyCategoryId, body: this.propertyCategoryForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.toastr.success(res["message"],"Success");
        this.router.navigate(["/property-category-list"])
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }


}
