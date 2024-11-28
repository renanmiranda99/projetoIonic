import { AlterarCorPopulacaoDirective } from '../alterar-cor-populacao.directive';
import { ElementRef } from '@angular/core';

describe('AlterarCorPopulacaoDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('span') };
    const directive = new AlterarCorPopulacaoDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set the correct color based on population', () => {
    const mockElementRef = { nativeElement: document.createElement('span') };
    const directive = new AlterarCorPopulacaoDirective(mockElementRef as ElementRef);

    directive.populacao = 1_500_000;
    directive.ngOnInit();
    expect(mockElementRef.nativeElement.style.color).toBe('purple');
  });
});
