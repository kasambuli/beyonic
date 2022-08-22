import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: boolean = false;
  toggleShowData() {
    this.data = this.data ? false : true;
  }
}
