import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
