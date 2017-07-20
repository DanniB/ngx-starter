import { MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdTableModule } from '@angular/material';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdTableModule],
    exports: [MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdTableModule],
})
export class CustomMaterialModule { }
