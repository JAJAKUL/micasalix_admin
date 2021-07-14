import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  customerList: any;
  page = 1;
  limit = 10;
  params: any;
  count: Number = 0;
  search: String = '1';
  email: string = '';
  userList: any;
  RetailCustomersTab: boolean = true;
  IndustrialCustomersTab: boolean = false;
  
    constructor(
      public webService: WebService,
      public toastr: ToastrService,
      public router: Router,
      private activatedRoute: ActivatedRoute
      ) { 
        this.activatedRoute.queryParams.subscribe(params => {
          console.log(params);
          this.params = params;
          this.getUserList(params,this.search,this.email);
        });
      }

    ngOnInit(){
    }

    searchCustomer(email) {
      this.email = email;
      this.getUserList(this.params,this.search,email);
    }

    tabChange(index: number){
      if(index === 1){
        this.userList = '';
        this.search = '2';
        this.getUserList(this.params,'2','');
        this.IndustrialCustomersTab = true;
        this.RetailCustomersTab = false;
      }else if(index === 0) {
        this.userList = '';
        this.search = '1';
        this.getUserList(this.params,'1','');
        this.RetailCustomersTab = true;
        this.IndustrialCustomersTab = false;
      }
    }

    getUserList = (params,search,email) => {
      let paramData = "?";
      for (let key in params) {
        paramData += `${key}=${params[key]}&`
      }
      this.webService.createGet({url: BaseUrl.apiUrl("userList")+ paramData+`search=`+search+`&email=`+email, contentType: true }).then(res => {
        if (res["status"]) {
          this.userList = res['data'];
          this.count = res['count'];
        }else{
          this.toastr.error(res["message"],"Error")
        }
      })
    }
  
   
}
