import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  exitGame() {
    const ans = confirm("Do you want to exit the game?");

    if(ans) {
      this.router.navigate(['/']);
    }
  }
}
