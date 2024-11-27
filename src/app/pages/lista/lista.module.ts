import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { FormatarNomePipe } from '../../pipe/formatar-nome/formatar-nome.pipe';
import { AlterarFundoDirective } from 'src/app/directives/alterar-fundo/alterar-fundo.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlterarFundoDirective,
    IonicModule,
    ListaPageRoutingModule,
  ],
  declarations: [ListaPage, FormatarNomePipe]
})
export class ListaPageModule {}
