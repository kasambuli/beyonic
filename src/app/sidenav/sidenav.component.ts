import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}
  hideNoDataComponent: boolean = false;
  toggleShowNoDataComponent() {
    this.hideNoDataComponent = this.hideNoDataComponent ? false : true;
  }
  ngOnInit(): void {}
}
