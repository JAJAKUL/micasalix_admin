import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { WebService } from 'app/services/web.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public isCollapsed = true;
    @ViewChild("navbar-cmp", {static: false}) button;

    constructor(
      location:Location, 
      private renderer : Renderer2, 
      private element : ElementRef, 
      private router: Router,
      public webService: WebService,
      public toastr: ToastrService,
      public spinnerService: NgxSpinnerService
      ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
          this.sidebarClose();
       });
    }


    getTitle(){
      var titleeData = this.location.prepareExternalUrl(this.location.path());
      var titlee = '/' + titleeData.substring(titleeData.lastIndexOf('/') + 1);
      var quarytitle = titleeData.substring(0, titleeData.indexOf("?")); 
      var titlee1 = titleeData.slice( 1 )
      if (quarytitle) quarytitle = quarytitle.slice(1);
      for(var item = 0; item < this.listTitles.length; item++){
          if((this.listTitles[item].path === titlee && titlee === titlee1) || this.listTitles[item].path === quarytitle ){
              return this.listTitles[item].title;
          }else {
            for(var childPath=0; childPath < this.listTitles[item].child.length; childPath++) {
              if(this.listTitles[item].child[childPath].path === titlee) {
                return this.listTitles[item].child[childPath].title;
              }else{
                var lastTitle = titleeData.slice(0,titlee.length+2);
                 lastTitle = '/' + lastTitle.substring(lastTitle.lastIndexOf('/') + 1);
                if(this.listTitles[item].child[childPath].path === lastTitle) {
                  return this.listTitles[item].child[childPath].title;
                }
              }
            }
          }
      }
      // return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
      }
      sidebarOpen() {
          const toggleButton = this.toggleButton;
          const html = document.getElementsByTagName('html')[0];
          const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          }, 500);

          html.classList.add('nav-open');
          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }
          this.sidebarVisible = true;
      };
      sidebarClose() {
          const html = document.getElementsByTagName('html')[0];
          const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
          if (window.innerWidth < 991) {
            setTimeout(function(){
              mainPanel.style.position = '';
            }, 500);
          }
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
      };
      collapse(){
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('bg-white');
        }else{
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('bg-white');
        }
      }

      logOut() {
        this.spinnerService.show();
        setTimeout(() => {
          this.webService.removeLocalData("adminData");
          this.webService.removeLocalData("micasaluxToken");
          this.webService.sendLoggedoutData(null);
          this.spinnerService.hide();
          this.router.navigate(["/login"]);
        }, 5000);
      }

}
