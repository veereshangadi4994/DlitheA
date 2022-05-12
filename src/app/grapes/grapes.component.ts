import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grapes',
  templateUrl: './grapes.component.html',
  styleUrls: ['./grapes.component.css'],
})
export class GrapesComponent implements OnInit {
  count = 1;

  receivecount($event: number) {
    this.count = $event;
  }
  constructor() {}

  ngOnInit(): void {}
}
