import { Component } from '@angular/core';
import { FeriadosService } from '.././app/services/feriados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  feriados: any[] = [];
  
  meses: any[] = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre'];
  

  constructor( private timeline: FeriadosService ) {
    this.timeline.getFeriados()
    .subscribe((data: any) => {
      this.feriados = data;});

  }

}
