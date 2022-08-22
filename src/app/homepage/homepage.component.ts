import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: string;
  amount: string;
  status: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'call_made',
    name: 'John Dembe',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '4 hr',
  },
  {
    position: 'call_made',
    name: 'Mary Kalkara',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '4 hr',
  },
  {
    position: 'vertical_align_bottom',
    name: 'Philip Kenyaga',
    amount: 'UGX 5,846',
    status: 'Completed',
    time: '2 d',
  },
  {
    position: 'call_made',
    name: 'Nelson Kizza',
    amount: 'UGX 5,846',
    status: 'Pending',
    time: '5 d',
  },
  {
    position: 'call_made',
    name: 'Alica Mukassa',
    amount: 'UGX 5,846',
    status: 'Failed',
    time: '5 d',
  },
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['position', 'name', 'amount', 'status', 'time'];
  dataSource = ELEMENT_DATA;
}
