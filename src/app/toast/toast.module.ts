import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from "./toast.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [ToastComponent],
    exports: [
        ToastComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ToastModule {
}
