import { Component } from '@angular/core';
import { ZipServiceService } from '../zip-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent { 

  zipcodes: Array<string>;

  newZipAvailable(zip) {
    this.zipService.add(zip);
    console.log(this.zipcodes);
  }

  constructor(private zipService: ZipServiceService) { 
    this.zipcodes = zipService.get();
 }

}
