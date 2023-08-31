import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-abs',
    templateUrl: './abs.component.html',
    styleUrls: ['./abs.component.scss'],
})
export class AbsComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
