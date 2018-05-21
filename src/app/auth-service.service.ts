import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
  token:string;
  constructor() { }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  deteToken() {
    //TO DO
  }
}
