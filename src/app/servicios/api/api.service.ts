import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ListaVuelosI} from '../../modelos/listavuelos.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://solodata.es/";
  url1:string = "https://recruiting-api.newshore.es/api/flights/2";
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllVuelos(pagne:number):Observable<ListaVuelosI[]>{
    let direccion = this.url;
    return this.http.get<ListaVuelosI[]>(direccion)
  }
}
