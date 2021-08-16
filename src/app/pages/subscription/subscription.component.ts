import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})


export class SubscriptionComponent implements OnInit {
  propertyTypeList: any;
  count: Number = 0;
  page = 1;
  limit = 10;
  params: any;
  search: any = "";
  addForm: FormGroup;
  editForm: FormGroup;
  getData;
  editData;
  constructor(
    private router: Router,
    private webService: WebService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,

  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.params = params;
      this.getPropertyTypeList(params,this.search);
    });

    this.addForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      no_of_service: [null, Validators.compose([Validators.required])],
      no_of_request: [null, Validators.compose([Validators.required])],
      zipCode: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
    this.editForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      no_of_service: [null, Validators.compose([Validators.required])],
      no_of_request: [null, Validators.compose([Validators.required])],
      zipCode: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });


   }
   openDialog() {
    let dialogRef =  this.dialog.open(DialogElementsExampleDialog);
    // dialogRef.close();
  }

   addPropertyType(){
    this.router.navigate(['/create-property-type']);
   }

   editPropertyType(id) {
     console.log("id==",id)
    this.router.navigate(['/edit-property-type'+'/'+id]);
  }

  deleteAgentType(id) {
    console.log("id==",id)
  }

  findPropertyType(){
    this.getPropertyTypeList(this.params,this.search);
   }

   getAllPropertyType(){
     this.search = "";
    this.getPropertyTypeList(this.params,'');
   }

  ngOnInit(): void {
    this.getData = {}
    this.editData = {}
    this.getPropertyTypeList(this.params,'');
  }

  getPropertyTypeList = (params,search) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("subscriptionList")+ paramData+`search=`+search, contentType: true }).then(res => {
     console.log(resizeTo)
      if (res["status"]) {
        this.propertyTypeList = res['data'];
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/property-type-list'], { queryParams: { page: this.page, limit: this.limit } });
  }



  activeAndDeactiveSubscription(data,index) {
    var status: boolean
    if(data.status){
      status = false
    }else{
      status = true
    }

    console.log(data)
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactiveSubscription")+`?status=`+status+`&Id=`+data._id, contentType: true }).then(res => {
      console.log(res)
      if (res["status"]) {
        this.propertyTypeList[index].status = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }
  removeSubscription(id,index) {
    console.log("id==",id);
    this.webService.createGet({url: BaseUrl.apiUrl("removeSubscription")+`?Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.propertyTypeList.splice(index, 1);
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  addForm: FormGroup;
  editForm: FormGroup;
  getData = {};
  editData = {};
  constructor(
    private router: Router,
    private webService: WebService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });

    this.addForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      no_of_service: [null, Validators.compose([Validators.required])],
      no_of_request: [null, Validators.compose([Validators.required])],
      zipCode: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
    this.editForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      no_of_service: [null, Validators.compose([Validators.required])],
      no_of_request: [null, Validators.compose([Validators.required])],
      zipCode: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });


   }


  close(data){
    console.log(data)
    this.dialog.closeAll();
  }
}
