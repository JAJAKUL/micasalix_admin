import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  newsForm: FormGroup;
  submitted: Boolean = false;
  @ViewChild('uploadEl') uploadElRef: ElementRef;
  addEventForm: FormGroup;
  icon_pic: any;
  selectedImg: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { 
    this.createnewsForm();
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.newsForm.controls[controlName].hasError(errorName);
  }

  createnewsForm(){
    this.newsForm = this.FB.group({
      news_title: ['',[Validators.required]],
      creator_name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      status: [true,[Validators.required]],
      publicist_date: ['',[Validators.required]],
    });
  }

  
  onProfilePicture(event){
    var reader = new FileReader();
    reader.onload = (event) => {
        this.icon_pic = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg = event.target.files[0];
}



  submitNewsForm() {
    console.log("newsForm===",this.newsForm.value)
    if(this.selectedImg != '') {
      this.submitted = true;
      if (this.newsForm.invalid) return;
      let formData = new FormData();
      formData.append('news_image', this.selectedImg);
      formData.append('news_title', this.newsForm.controls.news_title.value);
      formData.append('creator_name', this.newsForm.controls.creator_name.value);
      formData.append('description', this.newsForm.controls.description.value);
      formData.append('status', this.newsForm.controls.status.value);
      formData.append('publicist_date', this.newsForm.controls.publicist_date.value);

      this.webService.createPostWithImage({ url: BaseUrl.apiUrl("createNews"), body: formData, loading: true }).then(res => {
        if (res["status"]) {
          this.router.navigate(["/news-list"])
          this.toastr.success(res["message"],"Success");
        }else{
          console.log("res error");
          this.toastr.error(res["message"],"Error")
        }
      })
    } else {
      this.toastr.success("News Image is required","info");
    }
  }
}
