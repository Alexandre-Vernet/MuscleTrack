import { Component, Input } from '@angular/core';
import { Exercise } from "../exercise";

@Component({
    selector: 'app-shoulders',
    templateUrl: './shoulders.component.html',
    styleUrls: ['./shoulders.component.scss'],
})
export class ShouldersComponent {

    @Input() exercises: Exercise[] = [];

    constructor() {
    }

}
