import { Component } from '@angular/core';
import { ColumnsTableModel } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any[] = [
    { id: '1', teste: 'Pedro' },
    { id: '2', teste: 'Paulo' },
  ];

  columns: ColumnsTableModel[] = [
    { name: 'id', displayedName: 'id', sort: false },
    { name: 'teste', displayedName: 'nome', sort: true },
  ];

  selected(event: any) {
    console.log(event);
  }
}
