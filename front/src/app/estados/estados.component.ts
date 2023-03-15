import { Component } from '@angular/core';
import { EstadoServiceService } from './estado-service.service';
import { Estado } from './estado';
import { Cidade } from './cidade';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})


export class EstadosComponent {

estadoSelecionado : Estado = new Estado(0,'Brasil') ;
estados? : Estado[];
cidades? : Cidade[];

constructor(
  private EstadoService : EstadoServiceService
  ) {
  this.estados = this.EstadoService.getEstado();
}

onSelect(id: any) {
 this.cidades = this.EstadoService.getCidades().filter((item)=> item.paisid == id);
}
}
