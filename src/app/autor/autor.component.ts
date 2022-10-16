import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  programador = "Douglas Castillo Flores"
  lenguajes: any[] = ['C#', 'Python', 'Java', 'Typescript', 'SQL'];
  mostrar:boolean = true

  accionImagen(){
    this.mostrar = !this.mostrar
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
