import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumnos.model';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent implements OnInit {

  puntuacion = 9;
  alumno1 = new Alumno(1, 'Jesus', 'Rosete Tlachi', 'Tlaxcala');
  alumno2 = new Alumno(2, 'Carlos', 'Cuautle Tirado', 'Ecatepec');

  constructor() { }

  ngOnInit() {
  }

  getPuntuacion(){
    return this.puntuacion;
  }

}
