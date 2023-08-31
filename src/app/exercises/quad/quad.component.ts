import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-quad',
    templateUrl: './quad.component.html',
    styleUrls: ['./quad.component.scss'],
})
export class QuadComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
