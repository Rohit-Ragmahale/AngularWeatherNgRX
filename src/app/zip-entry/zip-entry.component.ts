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
                                    Validators.minLength(5),
                                    Validators.maxLength(5),
                                    Validators.pattern("[0-9]{5}")  
                                  ])
    });
  }
  addZipCode() {
     this.addZipcode.emit(this.userForm.controls.zip.value);
     this.userForm.reset();
  }
}
