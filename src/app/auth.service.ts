import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;

  private loginStatus:any;
  constructor(private http:HttpClient, private router:Router){
    this.isloggedIn=false;
    
   }

  login(username: string, password:string){
    let user:UserModule = new UserModule(username,password)
    this.isUser(user).subscribe(data=>{this.loginStatus=data
 
    if(this.loginStatus==true){
    localStorage.setItem("Login","true");
    localStorage.setItem("userName",username)
    this.router.navigate( ['home']);
    }
    else{
    localStorage.setItem("Login","false")
    this.router.navigate( ['home']);  
  }
    });
    this.isloggedIn=true;
 
    return of(this. isloggedIn);
  }




register(userName:string, password:string) :Observable<Object>{
  let user:UserModule= new UserModule(userName,password);
  user.id=-1;
 
  console.log("giriyo mu")
  return this.http.post("http://localhost:8080/users", user);


}

isUser(user:UserModule) :Observable<Object>{


  return this.http.post("http://localhost:8080/isUser",user);


}



}
