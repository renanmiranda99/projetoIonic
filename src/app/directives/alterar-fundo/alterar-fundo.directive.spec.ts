import { AlterarFundoDirective } from './alterar-fundo.directive';
import { ElementRef } from '@angular/core';

describe('AlterarFundoDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('div')
    };

    const directive = new AlterarFundoDirective(mockElementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
