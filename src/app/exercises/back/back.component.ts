import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-back',
    templateUrl: './back.component.html',
    styleUrls: ['./back.component.scss'],
})
export class BackComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
