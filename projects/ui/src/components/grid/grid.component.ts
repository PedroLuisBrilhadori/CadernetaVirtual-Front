import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'p-grid',
    templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit{
    
    window: Window
    cols: string
    row: string
    
    constructor () {
        this.window = {
            width: window.screen.width,
            height: window.screen.height
        };
        this.cols = '1';
        this.row = '550px';
    }

    setRowHeigth(window: Window) {
        if(window.width >= 950 && window.width <= 1330){
            this.cols = "2";
        } else 
        if(window.width >= 1331 && window.width < 1800){
            this.cols = "3";
        } else 
        if(window.width >= 1800){
            this.cols = "4";
        }
    }
    

    ngOnInit() {
        this.setRowHeigth(this.window);
    }
}


interface Window {
    width: number,
    height: number
}