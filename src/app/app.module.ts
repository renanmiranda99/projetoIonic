import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormatarNomePipe } from './pipe/formatar-nome/formatar-nome.pipe';

// Pipes

// Diretivas
//import { DestaqueDirective } from './directives/destaque.directive';
//import { ClasseAtivaDirective } from './directives/classe-ativa.directive';

// Services
//import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    // Pipes
    FormatarNomePipe,
    // Diretivas
    //DestaqueDirective,
    //ClasseAtivaDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    // Serviços
    //ConfigService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
