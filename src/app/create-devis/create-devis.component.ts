import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.css']
})
export class CreateDevisComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      devis: ['', Validators.required]
    })
  }

  createDevis(){
    console.log('form valid', this.form.valid);
    if (this.form.valid){

    }
  }

}
