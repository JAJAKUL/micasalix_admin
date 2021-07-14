import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList: any;
  page = 1;
  limit = 10;
  search: string = '';
  count: number = 0;
  
  constructor(
    public router: Router,
    public webService: WebService,
    public toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getEventList();
  }

  addEvents(){
    this.router.navigate(["/event-list/create-event"]);
  }

  findUser(){
    this.getEventList();
  }

  getAllUser(){
    this.search='';
    this.getEventList();
  }

  getEventList() {
    this.webService.createGet({ url: BaseUrl.apiUrl("eventList")+"?search="+this.search+"&page="+this.page+"&limit="+this.limit, contentType: true, loading: true}).then(res => {
      if(res["status"]) {
        this.eventList = res["data"].docs;
        this.eventList.forEach(element => {
          if(element.Picture) {
            element.Picture = BaseUrl.baseUrl+"/"+element.Picture;
          } else {
            element.Picture = '../../../assets/img/favicon.png'
          }
        });
      } else {
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getEventList();
  }

}
