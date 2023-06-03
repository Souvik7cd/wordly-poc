import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GameComponent } from './game/game.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PlayersComponent } from './game/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    KeyboardComponent,
    HeaderComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
