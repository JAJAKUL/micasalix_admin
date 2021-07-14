import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  newsForm: FormGroup;
  submitted: Boolean = false;
  @ViewChild('uploadEl') uploadElRef: ElementRef;
  addEventForm: FormGroup;
  icon_pic: any;
  selectedImg: any;
  newsId: any;
  newsDetails: any;

  constructor(
    private FB: FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.activeRoute.params.subscribe((param)=>{
      this.newsId = param.id;
      this.getnewsDetails();
      console.log(param)
    })
  }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.newsForm.controls[controlName].hasError(errorName);
  }

  createnewsForm(){
    this.newsForm = this.FB.group({
      news_title: [this.newsDetails && this.newsDetails.news_title ? this.newsDetails.news_title : '',[Validators.required]],
      creator_name: [this.newsDetails && this.newsDetails.creator_name ? this.newsDetails.creator_name : '',[Validators.required]],
      description: [this.newsDetails && this.newsDetails.description ? this.newsDetails.description : '',[Validators.required]],
      status: [this.newsDetails && this.newsDetails.status == true ? true : false,[Validators.required]],
      publicist_date: [this.newsDetails && this.newsDetails.publicist_date ? this.newsDetails.publicist_date : '',[Validators.required]],
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

  getnewsDetails(){
    this.webService.createGet({ url: BaseUrl.apiUrl("newsDetails")+`?Id=${this.newsId}`, loading: true }).then(res => {
      if (res["status"]) {
        this.newsDetails = res["data"];
        if(this.newsDetails.news_image) {
          this.icon_pic = BaseUrl.baseUrl+'/'+this.newsDetails.news_image
        } else {
          this.icon_pic = "assets/img/default-avatar.png";
        }
        this.createnewsForm();
        this.toastr.success(res["message"],"Success");
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }



  submitNewsForm() {
    console.log("newsForm===",this.newsForm.value) 
    this.submitted = true;
      if (this.newsForm.invalid) return;
      let formData = new FormData();
      if(this.selectedImg != '') {
        formData.append('news_image', this.selectedImg);
      }
      formData.append('news_title', this.newsForm.controls.news_title.value);
      formData.append('creator_name', this.newsForm.controls.creator_name.value);
      formData.append('description', this.newsForm.controls.description.value);
      formData.append('status', this.newsForm.controls.status.value);
      formData.append('publicist_date', this.newsForm.controls.publicist_date.value);

      this.webService.createPostWithImage({ url: BaseUrl.apiUrl("updateNews")+`?Id=${this.newsId}`, body: formData, loading: true }).then(res => {
        if (res["status"]) {
          this.router.navigate(["/news-list"])
          this.toastr.success(res["message"],"Success");
        }else{
          console.log("res error");
          this.toastr.error(res["message"],"Error")
        }
      })
  }
}
