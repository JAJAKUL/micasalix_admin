import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../../services/base.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userList: any;
  @Output() searchToEmit:EventEmitter<string>= new EventEmitter();
  search: string = '';
  @Input() count: any;
  page = 1;
  limit = 10;

  constructor(
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  findUser() {
    this.searchToEmit.emit(this.search);
  }

  getAllUser(){
    this.search = '';
    this.searchToEmit.emit(this.search)
  }

  viewUser(userId){
    this.router.navigate(['/user-list/user-details/'+userId]);
  }

  editUser(userId){
    this.router.navigate(['/edit-user/'+userId]);
  }

  createUser(){
    this.router.navigate(['/create-user']);
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/user-list'], { queryParams: { page: this.page, limit: this.limit } });
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

  // deleteService(id) {


  //   console.log(id)
  //   this.webService.createGet({url: BaseUrl.apiUrl("removeUser")+`&Id=`+id, contentType: true }).then(res => {
  //     console.log(res)
  //     if (res["status"]) {
  //       this.toastr.success(res["message"],"Success")
  //     }else{
  //       this.toastr.error(res["message"],"Error")
  //     }
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }



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

}
