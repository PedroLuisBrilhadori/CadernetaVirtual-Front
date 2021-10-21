import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GridComponent } from "./grid.component";

import {MatGridListModule} from '@angular/material/grid-list';

import { CardModule } from "../index";


@NgModule({
    declarations: [GridComponent],
    imports: [
        CommonModule,
        RouterModule,

        MatGridListModule,

        CardModule
    ],
    exports: [GridComponent],
})

export class GridModule {}