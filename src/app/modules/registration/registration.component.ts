import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

//Tallas para atributo size de modelo Person
  sizes = ['XS','S','M','L','XL'];

  //Datos de ejemplo pa la persona
  model = new Person(1,'Ivan',"Escalante Sierra","alum.iesalixar.org", this.sizes[3],'FLAMES');

  //Control formulario falso por defecto

  submitted = false;

  //Una vez enviado entonces se pone true

  onSubmit() {this.submitted=true};
  
  //Metodo para inicializar a una nueva persona

  newPerson(){
this.model = new Person(2,'','','','');
  };

}
