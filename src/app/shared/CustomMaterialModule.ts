import { NgModule } from "@angular/core";
import {
    MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule,
    MatSortModule, MatTableModule
} from "@angular/material";

@NgModule({
    imports: [MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule,
              MatSortModule, MatTableModule],
    exports: [MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule,
              MatSortModule, MatTableModule]
})
export class CustomMaterialModule { }
