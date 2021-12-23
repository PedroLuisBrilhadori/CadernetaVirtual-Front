import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  titleApp: string = 'Caderneta Virtual';

  @Output() menuButton: EventEmitter<any> = new EventEmitter<any>();

  clickMenu() {
    this.menuButton.emit(true);
  }

  constructor() {}

  ngOnInit(): void {}
}
