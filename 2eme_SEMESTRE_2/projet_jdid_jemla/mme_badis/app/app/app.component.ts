import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
