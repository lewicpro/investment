import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { IndexedDBService } from '../service/indexed-db.service';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  microregisters;
  usercreate = 'https://igtv.africa/api/dadsds/';
  
  // Define API
  apiURL = 'http://localhost:3000';
  indexedDBService: any;

  constructor(private http: HttpClient, public indexdB:IndexedDBService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<HomeComponent> {
    return this.http.get<HomeComponent>(this.apiURL + '/employees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

  // HttpClient API get() method => Fetch employee
  postOwnerApplicationfile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = 'https://igtv.africa/api/Adworker/Musango/Wakati';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Application', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}


getSingWapangajiLists() {
  this.microregisters = 'https://igtv.africa/api/Adworker/Muwosa/Bahiri/';
  return new Promise(resolve => {

        this.http.get(this.microregisters).subscribe(data => {
            resolve(data);
            },

        err => {
            console.log(err);
            this.indexdB.addUser('masatu').then(this.backgroundSync).catch(console.log)
            this.backgroundSync()
            });
        });
      }

      postData(credentials, type) {

        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders();
            this.http.post(this.usercreate + type, credentials, {headers: headers})
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
                this.indexdB.addUser('masatu').then(this.backgroundSync).catch(console.log)
                this.backgroundSync()
    
            });
    
        });
    }
      
  backgroundSync(){
    navigator.serviceWorker.ready
    .then((swRegistration)=> swRegistration.sync.register('post-data'))
    .catch(console.log)
  }



}