import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  page = 1;
  limit = 10;
  params: any;
  count: Number = 0;
  search: String = '';
  email: string = '';
  userList: any;

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

  ngOnInit(): void {
  }

  findUser() {
    this.getUserList(this.params,this.search,this.email);
  }

  getAllUser(){
    this.search = '';
    this.getUserList(this.params,this.search,this.email);
  }

  editAgent(userId){
    this.router.navigate(['/edit-agent/'+userId]);
  }

  createAgent(){
    this.router.navigate(['/create-agent']);
  }


  activeAgent(data,index) {
    var status: boolean
    if(data.Active){
      status = false
    }else{
      status = true
    }

    console.log(data)
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactiveAgent")+`?status=`+status+`&Id=`+data._id, contentType: true }).then(res => {
      console.log(res)
      if (res["status"]) {
        this.userList[index].Active = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  deleteService(id,index) {
    console.log("id==",id);
    this.webService.createGet({url: BaseUrl.apiUrl("removeUser")+`?Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.userList.splice(index, 1);
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  getUserList = (params,search,email) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("userList")+ paramData+`search=2`+`&email=`+search, contentType: true }).then(res => {
      if (res["status"]) {
        this.userList = res['data'];
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/user-list'], { queryParams: { page: this.page, limit: this.limit } });
  }
}
