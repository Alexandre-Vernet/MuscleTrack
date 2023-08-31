import { Component } from '@angular/core';
import { Exercise } from "./exercise";

@Component({
    selector: 'app-exercises',
    templateUrl: 'exercises.page.html',
    styleUrls: ['exercises.page.scss']
})
export class ExercisesPage {

    exercises: Exercise[] = [
        {
            name: 'Lorem ipsum',
            reps: '4 séries de 10 répétitions',
            img: 'assets/img/exercises/image.jpg'
        },
        {
            name: 'Lorem ipsum',
            reps: '4 séries de 10 répétitions',
            img: 'assets/img/exercises/image.jpg'
        },
        {
            name: 'Lorem ipsum',
            reps: '4 séries de 10 répétitions',
            img: 'assets/img/exercises/image.jpg'
        },
        {
            name: 'Lorem ipsum',
            reps: '4 séries de 10 répétitions',
            img: 'assets/img/exercises/image.jpg'
        }
    ];

    constructor() {
    }

}
