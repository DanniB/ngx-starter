import { Component } from "@angular/core";
import { getColor } from "./color-utils";

@Component({
    selector: "sg-app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    cols = 7;
    cardMaxRows = 1;

    cards: any[] = [
        { title: "Zeitfenster 1", cols: 2, rows: 2, color: getColor() },
        { title: "Zeitfenster 2", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 3", cols: 3, rows: 1, color: getColor() },
        { title: "Zeitfenster 4", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 5", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 6", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 7", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 8", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 9", cols: 1, rows: 3, color: getColor() },
        { title: "Zeitfenster 10", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 11", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 12", cols: 2, rows: 1, color: getColor() },
        { title: "Zeitfenster 13", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 14", cols: 1, rows: 1, color: getColor() },
        { title: "Zeitfenster 15", cols: 1, rows: 2, color: getColor() },
        { title: "Zeitfenster 16", cols: 2, rows: 1, color: getColor() }
    ];

    updateCols(val: any): void {
        val = Number(val);
        this.cols = isNaN(val) ? 3 : val;
    }

    updateCardMaxRows(val: any): void {
        val = Number(val);
        this.cardMaxRows = isNaN(val) ? 3 : val;
    }

    orderChanged(e: any): void {
        console.log("Order changed: ", e);
    }
}
