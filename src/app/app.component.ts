import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuItem: string = 'recipes';

  onMenuChoose(menuItem: string) {
    this.menuItem = menuItem;
  }
}
