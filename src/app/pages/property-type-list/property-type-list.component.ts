import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-property-type-list',
  templateUrl: './property-type-list.component.html',
  styleUrls: ['./property-type-list.component.css']
})
export class PropertyTypeListComponent implements OnInit {
  propertyTypeList: any;
  count: Number = 0;
  page = 1;
  limit = 10;
  params: any;
  search: any = "";

  constructor(
    private router: Router,
    private webService: WebService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.params = params;
      this.getPropertyTypeList(params,this.search);
    });
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
    this.getPropertyTypeList(this.params,'');
  }

  getPropertyTypeList = (params,search) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("propertyTypeList")+ paramData+`search=`+search, contentType: true }).then(res => {
      if (res["status"]) {
        this.propertyTypeList = res['data'].docs;
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

  activePropertyType(id,status,index) {
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactivePropertyType")+`?status=`+status+`&Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.propertyTypeList[index].status = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }
}
