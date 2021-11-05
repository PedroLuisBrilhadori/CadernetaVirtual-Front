import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'p-toolbar',
    templateUrl: 'toolbar.component.html',
    styles: [`.example-spacer {
        flex: 1 1 auto;
      }`]
})

export class ToolbarComponent {

  @Input('titleToolbar')
  title: string;

}

