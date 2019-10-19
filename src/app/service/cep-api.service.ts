import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepAPIService {
  apiURL :string ="https://viacep.com.br/ws/";

  constructor(private httpcliente  :HttpClient ) {
   }

   handleError(error){

    let errorMessage =`Error code: ${error.status}\\nMessage : ${error.messege}`;
    
    alert(errorMessage);

     return throwError(errorMessage)
   }
}
