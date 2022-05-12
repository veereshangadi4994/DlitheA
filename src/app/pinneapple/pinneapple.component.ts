import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinneapple',
  templateUrl: './pinneapple.component.html',
  styleUrls: ['./pinneapple.component.css'],
})
export class PinneappleComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
