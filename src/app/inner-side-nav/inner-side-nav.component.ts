import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-side-nav',
  templateUrl: './inner-side-nav.component.html',
  styleUrls: ['./inner-side-nav.component.css']
})
export class InnerSideNavComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
