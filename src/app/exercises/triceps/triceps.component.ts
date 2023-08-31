import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-triceps',
    templateUrl: './triceps.component.html',
    styleUrls: ['./triceps.component.scss'],
})
export class TricepsComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
