import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import { ListaVuelosI} from '../../modelos/listavuelos.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vuelos:ListaVuelosI[] | undefined;
  constructor(private api:ApiService, private router: Router){ }

  ngOnInit(): void {
    this.api.getAllVuelos(1).subscribe(data =>{
      console.log(data);
    })
  }



}
