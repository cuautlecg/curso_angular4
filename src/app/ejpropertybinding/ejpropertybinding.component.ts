import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = "Escribe algo motherfucker";

  constructor() {
    setTimeout(() => {
      alert("No te hagas pendejo vato y pon algo ¬¬");
    }, 4000);
   }

  ngOnInit() {
  }

}
