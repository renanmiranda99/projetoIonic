import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAlterarFundo]',
  standalone: true
})
export class AlterarFundoDirective implements OnInit {
  @Input('appAlterarFundo') populacao: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.populacao > 100000000) {
      this.el.nativeElement.style.backgroundColor = '#1E1E1E'; 
    } else if (this.populacao > 50000000) {
      this.el.nativeElement.style.backgroundColor = '#292828'; 
    } else {
      this.el.nativeElement.style.backgroundColor = '#3d3d3d'; 
    }
  }
}