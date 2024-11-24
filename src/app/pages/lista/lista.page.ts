import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaisApiService } from '../../services/pais-api/pais-api.service';
import { FavoritosService } from '../../services/favoritos/favoritos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  countries$: Observable<any> = new Observable<any>();
  paises: any = null;

  constructor(
    private pais: PaisApiService,
    private favoritosService: FavoritosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countries$ = this.pais.getAllCountries();

    this.countries$.subscribe({
      next: (data: any) => {
        this.paises = data.sort((a: any, b: any) =>
          a.name.official.localeCompare(b.name.official)
        );
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  irParaDetalhes(id: string) {
    this.router.navigateByUrl(`/detalhes/${id}`);
  }

  alternarFavorito(pais: any): void {
    if (this.favoritosService.ehFavorito(pais.cca3)) {
      this.favoritosService.removerFavorito(pais.cca3);
    } else {
      this.favoritosService.adicionarFavorito(pais);
    }
  }

  ehFavorito(cca3: string): boolean {
    return this.favoritosService.ehFavorito(cca3);
  }
}
