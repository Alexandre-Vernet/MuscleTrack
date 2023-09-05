import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Exercise } from '../../exercises/exercise';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit, OnChanges {
    @Input() updateExercise: Exercise;
    isModalOpen = false;
    @ViewChild(IonModal) modal: IonModal;
    currentRoute: string = '';

    constructor(
        private readonly router: Router
    ) {
    }

    ngOnInit() {
        this.currentRoute = this.router.url;
    }


    ngOnChanges() {
        if (this.updateExercise) {
            this.openModal();
        }
    }

    submit() {

    }

    openModal() {
        this.modal.present();
    }

    closeModal() {
        this.modal.dismiss();
    }
}
