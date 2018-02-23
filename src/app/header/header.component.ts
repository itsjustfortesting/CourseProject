import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onMenuClicked(menuItem: string) {
    this.menuClicked.emit(menuItem);
  }
}
