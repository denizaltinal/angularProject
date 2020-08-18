import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  id:number;
  userName:string
  password:string

  constructor(userName:string, password:string){
this.userName=userName;
this.password=password;
  }

}
