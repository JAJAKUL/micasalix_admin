import { Component, OnInit } from '@angular/core';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from '../../services/base.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: any;
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
      this.getNewsList(params,this.search);
    });
   }

   addNews(){
    this.router.navigate(['/create-news']);
   }

   editNews(id) {
    console.log("id==",id)
    this.router.navigate(['/edit-news'+'/'+id]);
   }

   deleteNews(id,index) {
    console.log("id==",id);
    this.webService.createGet({url: BaseUrl.apiUrl("removeNews")+`?Id=`+id, contentType: true }).then(res => {
      if (res["status"]) {
        this.newsList.splice(index, 1);
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  findNews(){
    this.getNewsList(this.params,this.search);
   }

   getAllNews(){
     this.search = "";
    this.getNewsList(this.params,'');
   }

  ngOnInit(): void {
    this.getNewsList(this.params,'');
  }

  getNewsList = (params,search) => {
    let paramData = "?";
    for (let key in params) {
      paramData += `${key}=${params[key]}&`
    }
    this.webService.createGet({url: BaseUrl.apiUrl("newsList")+ paramData+`search=`+search, contentType: true }).then(res => {
      if (res["status"]) {
        this.newsList = res['data'];
        this.newsList.forEach(element => {
          if(element.news_image) {
            element.news_image = BaseUrl.baseUrl+"/"+element.news_image;
          } else {
            element.news_image = '../../../assets/img/favicon.png'
          }
        });
        this.count = res['count'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

  paginationChange(event) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.router.navigate(['/news-list'], { queryParams: { page: this.page, limit: this.limit } });
  }




  activeAndDeactiveNews(data,index) {
    var status: boolean
    if(data.status){
      status = false
    }else{
      status = true
    }

    console.log(data)
    this.webService.createGet({url: BaseUrl.apiUrl("activeAndDeactiveNews")+`?status=`+status+`&Id=`+data._id, contentType: true }).then(res => {
      console.log(res)
      if (res["status"]) {
        this.newsList[index].status = status;
        this.toastr.success(res["message"],"Success")
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }


}
