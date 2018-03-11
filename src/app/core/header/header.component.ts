import {Component, OnInit} from '@angular/core';
import {DbService} from '../../shared/db.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dbService: DbService, private authService: AuthService) {
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

  onLogout() {
    this.authService.logout();
  }
}
