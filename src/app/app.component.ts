import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm: FormGroup;
 
  newZip = ""; 

   constructor(private builder: FormBuilder) {

    this.userForm = this.builder.group({
      zip: this.builder.control('', [Validators.required, 
                                    Validators.minLength(6),
                                    Validators.maxLength(6),
                                    Validators.pattern("[0-9]{6}")  
                                  ])
    });
  }

  addZipCode() {
    this.newZip = this.userForm.controls.zip.value;
  }
}
