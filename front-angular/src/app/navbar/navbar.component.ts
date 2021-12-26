import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.min.css',
    '../../assets/css/bootstrap-theme.css',
    '../../assets/css/main.css',
    './navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
