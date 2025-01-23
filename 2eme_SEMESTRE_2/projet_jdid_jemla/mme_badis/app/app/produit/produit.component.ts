import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  //attribut
   lesProduits:any= [];
  constructor(public ps:ProduitService){
  }


}
