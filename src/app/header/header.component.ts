import {Component, OnInit} from '@angular/core';
import {DbService} from '../recipess/db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dbService: DbService) {
  }

  ngOnInit() {
  }

  onSave() {
    this.dbService.saveData().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onLoad() {
    this.dbService.loadData();
  }
}
