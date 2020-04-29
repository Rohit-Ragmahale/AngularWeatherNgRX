import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZipServiceService {

  private zipcodes: Array<string> = [];
  constructor() { }

  get() {
    return this.zipcodes; 
  }

  add(zipCode) {
    this.zipcodes.push(zipCode);
  }

  remove(zipCode) {
    this.zipcodes = this.zipcodes.filter(zip => zip != zipCode);
  }
}