import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAlterarCorPopulacao]',
  standalone: true
})
export class AlterarCorPopulacaoDirective implements OnInit {
  @Input('appAlterarCorPopulacao') populacao: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.populacao >= 1_000_000_000) {
      this.el.nativeElement.style.color = 'darkred'; // Vermelho escuro
    } else if (this.populacao >= 1_000_000) {
      this.el.nativeElement.style.color = 'purple'; // Roxo
    } else if (this.populacao >= 100_000) {
      this.el.nativeElement.style.color = 'orange'; // Laranja
    } else if (this.populacao >= 25_000) {
      this.el.nativeElement.style.color = 'yellow'; // Amarelo
    } else {
      this.el.nativeElement.style.color = 'white'; // Padrão
    }
  }
}
