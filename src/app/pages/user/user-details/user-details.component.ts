import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { BaseUrl } from '../../../services/base.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;
  userId: any;

  constructor(
    public webService: WebService,
    public toastr: ToastrService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((param)=>{
      this.userId = param.userId;
    })
    this.getUserDetails();
   }

  ngOnInit(): void {
  }

  backToUserList() {
    this.router.navigate(['/user-list']);
  }

  getUserDetails() {
    this.webService.createGet({url: BaseUrl.apiUrl("userDetails")+'?id='+this.userId, contentType: true }).then(res => {
      if (res["status"]) {
        this.userDetails = res['data'];
      }else{
        this.toastr.error(res["message"],"Error")
      }
    })
  }

}
