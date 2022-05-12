import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guava',
  templateUrl: './guava.component.html',
  styleUrls: ['./guava.component.css'],
})
export class GuavaComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
