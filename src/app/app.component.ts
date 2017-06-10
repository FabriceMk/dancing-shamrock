import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dancing Clover';

  ngOnInit(): void {
    console.log(`App has been launched with ${this.title} as title`);
  }

  buttonClicked() {
    this.title = 'Dancing Shamrock';
  }
}
