import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-property-category-list',
  templateUrl: './property-category-list.component.html',
  styleUrls: ['./property-category-list.component.css']
})
export class PropertyCategoryListComponent implements OnInit {
  propertyCategoryList: any;
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
      this.getPropertyCategoryList(params,this.search);
    });
   }

   addPropertyCategoryType(){
    this.router.navigate(['/create-property-category']);
   }

   editPropertyCategory(id) {
     console.log("id==",id)
    this.router.navigate(['/edit-property-category'+'/'+id]);
  }

  deleteAgentType(id) {
    console.log("id==",id)
  }

  findPropertyCategoryType(){
    this.getPropertyCategoryList(this.params,this.search);
   }

   getAllAgent(){
     this.search = "";
    this.getPropertyCategoryList(this.params,'');
   }

  ngOnInit(): void {
    this.getPropertyCategoryList(this.params,'');
  }

  getPropertyCategoryList = (params,search) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("propertyCategoryTypeList")+ paramData+`search=`+search, contentType: true }).then(res => {
      if (res["status"]) {
        this.propertyCategoryList = res['data'].docs;
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/property-category-list'], { queryParams: { page: this.page, limit: this.limit } });
  }

  activePropertyCategory(id,status,index) {
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactivePropertyCategory")+`?status=`+status+`&Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.propertyCategoryList[index].status = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }
}
