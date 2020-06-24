import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FindRepoService {

  constructor( private http:HttpClient) { }
  
  findUser(name):Observable<any>{
    console.log(name)
    console.log(`https://api.github.com/users/`+name);
    return this.http.get(`https://api.github.com/search/users?q=`+name+`+repos:%3E5+followers:%3E0`);
  }

  finduserDetails(name):Observable<any>{
    return this.http.get(`https://api.github.com/users/`+name)
  }
  finduserRepo(name,page):Observable<any>{
    return this.http.get(`https://api.github.com/users/`+name+`/repos?page=`+page+`&per_page=10`)
  }
  findFollowing(name,page):Observable<any>{
    return this.http.get(`https://api.github.com/users/`+name+`/following?page=`+page+`&per_page=20`)
  }
  findFollowers(name,page):Observable<any>{
     return this.http.get(`https://api.github.com/users/`+name+`/followers?page=`+page+`&per_page=20`)
  }
}
 
