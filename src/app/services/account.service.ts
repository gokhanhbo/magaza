import { Injectable } from '@angular/core';



@Injectable()

export class AccountService {

  constructor() {}
  loggedIn = false;

  login(user:User):boolean{
    if(user.userName=="gokhan"&&user.password=="12345"){
      return true;
      this.loggedIn = true;
      localStorage.setItem("islogged", user.userName);
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

   logOut(){
     localStorage.removeItem("isLogged");
     this.loggedIn = false;
   }
}
