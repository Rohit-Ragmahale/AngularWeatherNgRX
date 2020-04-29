import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-zip-entry',
  templateUrl: './zip-entry.component.html',
  styleUrls: ['./zip-entry.component.css']
})
export class ZipEntryComponent {
  userForm: FormGroup;
  newZip = ""; 

  @Output() addZipcode = new EventEmitter();

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
    console.log("ys" + this.userForm.controls.zip.value);
     this.addZipcode.emit(this.userForm.controls.zip.value);
     this.userForm.reset();
  }
}
