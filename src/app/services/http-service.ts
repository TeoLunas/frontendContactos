import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { IRespuesta } from "../interfaces/IRespuesta";
import { IPagedRespuesta } from "../interfaces/IPagedRespuesta";
import { IContactosRespuesta } from "../interfaces/IContactosRespuesta";

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {
    constructor(private http: HttpClient) {

  }
  getContactos(page: number, size: number){
    let url = `${environment.baseUrl}/Contact/GetAllContacs?page=${page}&size=${size}`;
    return this.http.get<IRespuesta<IPagedRespuesta<IContactosRespuesta>>>(url)
  }


  // getDetalleEnrolamiento(idEnrolamiento: number){
  //   let url = `${environment.baseUrl}/Enrolamiento/GetDetalleEnrolamiento?idEnrolamiento=${idEnrolamiento}`;
  //   return this.http.get<IRespuesta<IDetalleEnrolamientoResponse>>(url)
  // }



}

