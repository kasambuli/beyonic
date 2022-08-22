import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: boolean = false;
  buttonTitle: string = 'Data';
  toggleShowData() {
    this.data = this.data ? false : true;
    this.buttonTitle = this.data ? 'Data' : 'No Data';
  }
}
