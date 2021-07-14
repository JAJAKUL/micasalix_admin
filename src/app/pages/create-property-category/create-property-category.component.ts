import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-create-property-category',
  templateUrl: './create-property-category.component.html',
  styleUrls: ['./create-property-category.component.css']
})
export class CreatePropertyCategoryComponent implements OnInit {
  propertyCategoryForm: FormGroup;
  submitted: Boolean = false;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.createPropertyCategoryForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.propertyCategoryForm.controls[controlName].hasError(errorName);
  }

  createPropertyCategoryForm(){
    this.propertyCategoryForm = this.FB.group({
      property_category_name: ['',[Validators.required]],
      property_category_description: ['',[Validators.required]]
    });
  }



  submitChangePasswrdForm() {
    this.submitted = true;
    if (this.propertyCategoryForm.invalid) return;
    this.webService.createPost({ url: BaseUrl.apiUrl("createPropertyCategoty"), body: this.propertyCategoryForm.value, contentType: true, loading: true }).then(res => {
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
