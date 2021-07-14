import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../../services/base.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  @ViewChild('uploadEl') uploadElRef: ElementRef;
  addEventForm: FormGroup;
  submitted: Boolean = false;
  icon_pic: any;
  selectedImg: any;

  constructor(
    public FB:FormBuilder,
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.addTimeSlot()
  }

  createForm() {
    this.addEventForm = this.FB.group({
      Picture:[null],
      StartDate: ['',[Validators.required]],
      EndDate: ['',[Validators.required]],
      startPrice: ['',[Validators.required]],
      EndPrice: ['',[Validators.required]],
      ArtistName: ['',[Validators.required]],
      SeatCapacity: ['',[Validators.required]],
      TimeSlot: this.FB.array([])
    })
  }

  onProfilePicture(event){
    var reader = new FileReader();
    reader.onload = (event) => {
        this.icon_pic = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg = event.target.files[0];
}

  submitAddEventForm(){ 
    console.log("this.addEventForm.value===",this.addEventForm.value);
    this.submitted = true;
    if (this.addEventForm.invalid) return;
    let formData = new FormData();
    if(this.selectedImg != '') {
      formData.append('Picture', this.selectedImg);
    }
    this.webService.createPost({ url: BaseUrl.apiUrl("createEvent"), body: this.addEventForm.value, contentType: true, loading: true }).then(res => {
      if (res["status"]) {
        this.webService.createPostWithImage({ url: BaseUrl.apiUrl("addEventImage")+"?eventId="+res["data"]._id, body: formData, contentType: true, loading: true}).then(res => {
          if(res["status"]) {
            this.toastr.success(res["message"],"Success");
            this.router.navigate(['/event-list']);
          } else {
            this.toastr.error(res["message"],"Error")
          }
        })
      }else{
        console.log("res error");
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  TimeSlot() : FormArray {
    return this.addEventForm.get("TimeSlot") as FormArray
  }

  newTimeSlot(): FormGroup {
    return this.FB.group({
      startTime: '',
      endTime: '',
    })
  }

  addTimeSlot() {
    this.TimeSlot().push(this.newTimeSlot());
  }

  removeQuantity(i:number) {
    if(this.TimeSlot().length != 1) {
      this.TimeSlot().removeAt(i);
    }
  }

}
