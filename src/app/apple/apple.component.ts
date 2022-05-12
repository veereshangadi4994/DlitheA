import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
})
export class AppleComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
