import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CardGridComponent } from  './card-grid.component';

@NgModule({
    declarations: [CardGridModule],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [CardGridComponent],
})  

export class CardGridModule {}