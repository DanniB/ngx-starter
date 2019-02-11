import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from "angular-calendar";
import { Subject } from "rxjs";
import { getColor } from "./color-utils";
import { colors } from "./demo-utils/colors";

@Component({
    selector: "sg-app-root",
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    CalendarView = CalendarView;

    locale = "de";

    view = CalendarView.Week;

    viewDate = new Date();

    externalEvents: CalendarEvent[] = [
        {
            title: "Zeitfenster 1",
            color: colors.red,
            start: new Date(),
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        },
        {
            title: "Zeitfenster 2",
            color: colors.blue,
            start: new Date(),
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        }
    ];

    events: CalendarEvent[] = [];

    activeDayIsOpen = false;

    refresh = new Subject<void>();

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

    eventDropped({ event, newStart, newEnd, allDay }: CalendarEventTimesChangedEvent): void {
        const externalIndex = this.externalEvents.indexOf(event);
        if (typeof allDay !== "undefined") {
            event.allDay = allDay;
        }
        if (externalIndex > -1) {
            this.externalEvents.splice(externalIndex, 1);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === "month") {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = [...this.events];
    }

    externalDrop(event: CalendarEvent) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.externalEvents.push(event);
        }
    }
}
