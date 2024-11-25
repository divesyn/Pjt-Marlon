import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { PaisComponent } from './paginas/pais/pais.component';
import { NaoDisponivelPipe } from './pipes/nao-disponivel.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { PaisesComponent } from './paginas/paises/paises.component';
import { DestaqueDirective } from './directives/destaque.directive';
import { OpacityDirective } from './directives/opacity.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PaisComponent,
    NaoDisponivelPipe,
    ObjectValuesPipe,
    JoinPipe,
    PaisesComponent,
    DestaqueDirective,
    OpacityDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
