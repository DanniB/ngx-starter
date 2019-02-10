import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "sg-mwl-demo-utils-calendar-header",
    templateUrl: "./calendar-header.component.html"
})
export class CalendarHeaderComponent {
    @Input() view: string;

    @Input() viewDate: Date;

    @Input() locale = "en";

    @Output() readonly viewChange: EventEmitter<string> = new EventEmitter();

    @Output() readonly viewDateChange: EventEmitter<Date> = new EventEmitter();
}
