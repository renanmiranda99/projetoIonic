import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private storageKey = 'favoritos';

  constructor() {}

  getFavoritos(): any[] {
    const favoritos = localStorage.getItem(this.storageKey);
    return favoritos ? JSON.parse(favoritos) : [];
  }

  adicionarFavorito(pais: any): void {
    const favoritos = this.getFavoritos();
    if (!favoritos.some((item) => item.cca3 === pais.cca3)) {
      favoritos.push(pais);
      localStorage.setItem(this.storageKey, JSON.stringify(favoritos));
    }
  }

  removerFavorito(cca3: string): void {
    const favoritos = this.getFavoritos();
    const atualizados = favoritos.filter((item) => item.cca3 !== cca3);
    localStorage.setItem(this.storageKey, JSON.stringify(atualizados));
  }

  ehFavorito(cca3: string): boolean {
    const favoritos = this.getFavoritos();
    return favoritos.some((item) => item.cca3 === cca3);
  }
}
