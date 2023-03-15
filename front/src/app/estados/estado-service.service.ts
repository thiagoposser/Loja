import { Injectable } from '@angular/core';
import { Estado } from './estado';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class EstadoServiceService {

  constructor() { }

  getEstado() {
    return [
     new Estado(0, 'SP' ),
     new Estado(1, 'PR' ),
     new Estado(2, 'SC' )
    ];
  }
   getCidades() {
   return [
     new Cidade(1, 0, 'São Paulo' ),
     new Cidade(2, 0, 'Brasília' ),
     new Cidade(3, 1, 'Rio de Janeiro'),
     new Cidade(4, 1, 'Santos'),
     new Cidade(5, 2, 'New Yord' ),
     new Cidade(6, 2, 'Chicago'),
     new Cidade(7, 2, 'Los Angeles' ),
     new Cidade(8, 0, 'Roma' ),
     new Cidade(9, 1, 'Florença' ),
     new Cidade(10, 2, 'Veneza')
    ];
  }
}
