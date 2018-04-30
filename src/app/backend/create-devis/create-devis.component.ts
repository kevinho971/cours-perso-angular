import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DevisService } from '../../services/devis.service';
import { Devis } from '../../../devis.interface';
import { AuthService } from '../../authentification/services/auth.service';

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.css']
})
export class CreateDevisComponent implements OnInit {
  private active: boolean = true;
  form: FormGroup;
  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  isInEditMode = false;
  verb = 'Ajouter';

  isAdmin: boolean = false;

  constructor(private formBuilder: FormBuilder, private  devisService: DevisService, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      devis: ['', Validators.required],
      key: ['']
    });

    this.devisService.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = 'modifier';
      console.log('data', data);
      this.form.get('firstname').patchValue((data as Devis).firstname);
      this.form.get('lastname').patchValue((data as Devis).lastname);
      this.form.get('devis').patchValue((data as Devis).devis);
      this.form.get('key').patchValue((data as Devis).key);
    })

    this.authService.user$.subscribe(user => {
      console.log('user: ', user);
      if (user && user.email === 'test@test.fr'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    })
  }

  saveDevis(){
    console.log('form valid', this.form.valid);
    if (!this.form.valid){
      console.log('Form not valid');
      return;
    }
    console.log('Form is valid');
    if (!this.isInEditMode){
      this.verb = 'ajouter';
      this.create.emit(this.form)
    }else if(this.isInEditMode){
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
    this.form.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    this.verb = 'ajouter';
  }

  cancelEdit(){
    this.isInEditMode = false;
    this.verb = 'ajouter';
    this.form.reset();
  }

}
