import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent { 

  zipcodes: Array<string> = ["123456"];

  newZipAvailable(zip) {
    this.zipcodes.push(zip);
    console.log(this.zipcodes);
  }
}
