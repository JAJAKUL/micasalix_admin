import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-agent-type-list',
  templateUrl: './agent-type-list.component.html',
  styleUrls: ['./agent-type-list.component.css']
})
export class AgentTypeListComponent implements OnInit {
  agentTypeList: any;
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
      this.getAgentTypeList(params,this.search);
    });

   }

   addAgentType(){
    this.router.navigate(['/create-agent-type']);
   }

   editAgentType(id) {
     console.log("id==",id)
    this.router.navigate(['/edit-agent-type'+'/'+id]);
  }

  deleteAgentType(id) {
    console.log("id==",id)
  }

   findAgent(){
    this.getAgentTypeList(this.params,this.search);
   }

   getAllAgent(){
     this.search = "";
    this.getAgentTypeList(this.params,'');
   }

  ngOnInit(): void {
    this.getAgentTypeList(this.params,'');
  }

  getAgentTypeList = (params,search) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("agentTypeList")+ paramData+`search=`+search, contentType: true }).then(res => {
      if (res["status"]) {
        this.agentTypeList = res['data'].docs;
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/agent-type-list'], { queryParams: { page: this.page, limit: this.limit } });
  }

  activeAgent(id,status,index) {
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactiveAgentTypeStatus")+`?status=`+status+`&Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.agentTypeList[index].status = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
