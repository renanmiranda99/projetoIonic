import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisApiService } from '../services/pais-api.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  pais: any;

  constructor(
    private route: ActivatedRoute,
    private paisService: PaisApiService 
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.paisService.getCountryById(id).subscribe({
        next: (data: any) => {
          this.pais = data;
        },
        error: (err: any) => {
          console.error('Erro ao buscar país:', err);
        },
      });
    }
  }
}
