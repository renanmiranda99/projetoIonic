import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.carregarFavoritos();
  }

  carregarFavoritos(): void {
    this.favoritos = this.favoritosService.getFavoritos();
  }
}
