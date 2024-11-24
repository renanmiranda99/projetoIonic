import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaisApiService } from '../../services/pais-api/pais-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  countries$: Observable<any> = new Observable<any>();

  constructor(private pais: PaisApiService, private router: Router) {}

  irParaDetalhes(id: string) {
   this.router.navigateByUrl(`/detalhes/${id}`);
  }

  paises: any = null;

  ngOnInit(): void {
    this.countries$ = this.pais.getAllCountries();

    this.countries$.subscribe({
      next: (data: any) => {
        console.log(data)
        this.paises = data.sort((a: any, b: any) =>
          a.name.official.localeCompare(b.name.official)
        );
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
