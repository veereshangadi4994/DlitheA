import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css'],
})
export class BananaComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
