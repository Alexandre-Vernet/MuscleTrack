import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-chest',
    templateUrl: './chest.component.html',
    styleUrls: ['./chest.component.scss'],
})
export class ChestComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
