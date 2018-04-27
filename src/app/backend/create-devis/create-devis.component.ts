import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DevisService } from '../../services/devis.service';
import { Devis } from '../../../devis.interface';

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.css']
})
export class CreateDevisComponent implements OnInit {
  form: FormGroup;
  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private  devisService: DevisService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      devis: ['', Validators.required]
    });

    this.devisService.subject.subscribe(data => {
      console.log('data', data);
      this.form.get('firstname').patchValue((data as Devis).firstname);
      this.form.get('lastname').patchValue((data as Devis).lastname);
      this.form.get('devis').patchValue((data as Devis).devis);
    })
  }

  createDevis(){
    console.log('form valid', this.form.valid);
    if (this.form.valid){
      this.create.emit(this.form);
    }
  }

}
