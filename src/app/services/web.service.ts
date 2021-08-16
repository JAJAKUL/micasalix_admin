import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders,HttpHeaderResponse,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root"
})
export class WebService {
  @Output() getLoggedInData: EventEmitter<any> = new EventEmitter();
  @Output() getLoggedOutData: EventEmitter<any> = new EventEmitter();


  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService
  ) { }

  sendLoggedData(adminData) {
    this.getLoggedInData.emit(adminData);
  }
  sendLoggedoutData(data) {
    this.getLoggedOutData.emit({});
  }

  saveLocalData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeLocalData(key) {
    return localStorage.removeItem(key);
  }

  createPost(params) {
    if((typeof params.loading !== 'undefined'))
    this.spinnerService.show();
    return new Promise((resolve, reject) => {
        const httpOptions = {
          headers: new HttpHeaders().set("Content-Type", "application/json").set("x-access-token",this.getLocalData("micasaluxToken") || '')
        };
        return this.http.post(params.url, params.body, httpOptions).pipe().subscribe(res => {
         if((typeof params.loading !== 'undefined'))
           this.spinnerService.hide()
         return resolve(res);
        }, err => {
          if((typeof params.loading !== 'undefined'))
           this.spinnerService.hide()
          return reject(err ? err.json() : {});
        });
      });
    }

    createPut(params) {
      if((typeof params.loading !== 'undefined'))
        this.spinnerService.show();
      return new Promise((resolve, reject) => {
        const httpOptions = {
          headers: new HttpHeaders().set("Content-Type", "application/json").set("x-access-token",this.getLocalData("micasaluxToken") || '')
        };
        return this.http.put(params.url, params.body, httpOptions).pipe().subscribe(res => {
         if((typeof params.loading !== 'undefined'))
           this.spinnerService.hide()
         return resolve(res);
        }, err => {
        if((typeof params.loading !== 'undefined'))
           this.spinnerService.hide()
        return reject(err ? err.json() : {});
        });
      });
    }

    createGet(params) {
     if((typeof params.loading !== 'undefined'))
        this.spinnerService.show();
      return new Promise((resolve, reject) => {
        const httpOptions = {
          headers: new HttpHeaders().set("Content-Type", "application/json").set("x-access-token",this.getLocalData("micasaluxToken") || '')
        };
        this.http.get(params.url, httpOptions).pipe().subscribe(res => {
          if((typeof params.loading !== 'undefined'))
           this.spinnerService.hide()
          return resolve(res);
        }, err => {
        if((typeof params.loading !== 'undefined'))
          this.spinnerService.hide()
          return reject(err ? err : {});
        });
      });
    }

  formData(params) {
    const httpOptions = {
      headers: new HttpHeaders().set("x-access-token",this.getLocalData("micasaluxToken"))
    };
    return this.http.put(params.url, params.body, httpOptions)
    .pipe();
  }

  createPostWithImage(params) {
    if ((typeof params.loading !== 'undefined') ? params.loading : true) this.spinnerService.show();
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders().set("x-access-token",this.getLocalData("micasaluxToken") || '')
      };
      return this.http.post(params.url, params.body, httpOptions).pipe().subscribe(res => {
        this.spinnerService.hide()
        return resolve(res);
      }, err => {
        this.spinnerService.hide()
        return reject(err ? err.json() : {});
      });
    });
  }

}
