import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dancing Clover';

  constructor(private titleService: Title) { }

  buttonClicked() {
    this.title = 'Dancing Shamrock';
    this.titleService.setTitle(this.title);
  }
}
