import { CdkDragEnter, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChildren
} from "@angular/core";

@Component({
    selector: "sg-app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    changeDetection: ChangeDetectionStrategy.Default // OnPush
})
export class DashboardComponent implements AfterViewInit {
    drops: CdkDropList[];

    @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

    @Output() readonly orderChanged: EventEmitter<any[]> = new EventEmitter();

    @Input() cols: number;
    @Input() cardMaxRows: number;
    @Input() cards: any[] = [];

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        const cs: any = () => (this.drops = this.dropsQuery.toArray());

        this.dropsQuery.changes.subscribe(cs);
        Promise.resolve().then(cs);
    }

    entered(e: CdkDragEnter): void {
        this.cd.markForCheck();
        moveItemInArray(this.cards, e.item.data, e.container.data);
        this.orderChanged.emit(this.cards);
    }
}
