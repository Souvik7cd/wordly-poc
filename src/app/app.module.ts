import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PlayersComponent } from './game/players/players.component';
import { HomeComponent } from './home/home.component';
import { NewGameOptionsComponent } from './home/new-game-options/new-game-options.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    KeyboardComponent,
    HeaderComponent,
    PlayersComponent,
    HomeComponent,
    NewGameOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
