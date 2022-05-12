import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.component.html',
  styleUrls: ['./strawberry.component.css'],
})
export class StrawberryComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
