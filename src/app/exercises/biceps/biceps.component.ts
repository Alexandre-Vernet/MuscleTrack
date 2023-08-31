import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-biceps',
    templateUrl: './biceps.component.html',
    styleUrls: ['./biceps.component.scss'],
})
export class BicepsComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
