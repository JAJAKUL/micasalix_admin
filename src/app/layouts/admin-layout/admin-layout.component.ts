import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'app/services/web.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  adminData: any = {};
  constructor(
    private webService: WebService,
    private router: Router
  ) {
    this.webService.getLoggedInData.subscribe((data) => {
      this.adminData = data;
    });
    webService.getLoggedOutData.subscribe((data) => {
      this.adminData = null;
    });
  }
  
  ngOnInit() {
    this.checkLogin();
   }

  checkLogin() {
    if (this.webService.getLocalData("micasaluxToken") && this.webService.getLocalData("adminData")) {
      this.adminData = this.webService.getLocalData("adminData");
    }
  }
}
