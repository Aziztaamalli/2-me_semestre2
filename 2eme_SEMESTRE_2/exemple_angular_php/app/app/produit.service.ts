import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url:string = "http://localhost/backend/produit.php";

  constructor(public http:HttpClient) { }


 tousProduits()
 {

     return this.http.get(this.url);
 }
 
}
