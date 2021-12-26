import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.min.css',
    '../../assets/css/bootstrap-theme.css',
    '../../assets/css/main.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
