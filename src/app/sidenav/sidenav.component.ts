import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  amount: string;
  status: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'John Dembe',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '4 hr',
  },
  {
    position: 2,
    name: 'Mary Kalkara',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '4 hr',
  },
  {
    position: 3,
    name: 'Philip Kenyaga',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '2 d',
  },
  {
    position: 4,
    name: 'Nelson Kizza',
    amount: 'UGX 5,846',
    status: 'Pending',
    time: '5 d',
  },
  {
    position: 5,
    name: 'Alica Mukassa',
    amount: 'UGX 5,846',
    status: 'Failed',
    time: '5 d',
  },
];
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['position', 'name', 'amount', 'status', 'time'];
  dataSource = ELEMENT_DATA;
}
