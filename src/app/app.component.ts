import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBYIQ_UAiRZb0xJPR3Sq2GDzpqncrSg3dM',
      authDomain: 'ng-recipe-book-71e19.firebaseapp.com'
    });
  }
}
