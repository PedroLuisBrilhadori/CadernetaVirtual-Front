import { Component, Input, OnInit } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'p-card',
  templateUrl: 'card.component.html',
  styles: [
    `
      .example-card {
        border: solid 1px grey;
        max-width: 350px;
        margin-bottom: 8px;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  @Input('p-source')
  source: any;

  withImage: boolean = true;
  isCard: boolean = true;

  constructor() {}

  getImage(): boolean {
    return !(this.source.image === undefined);
  }

  withText(): boolean {
    if (!(this.source.text === undefined)) {
      throw new Error('Text is not defined in CardComponent');
    }
    return !(this.source.text == undefined);
  }

  ngOnInit() {
    this.withImage = this.getImage();
    this.isCard = this.withText();
  }
}
