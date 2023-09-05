import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from '../../exercises/exercises.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../../exercises/exercise';
import { AdminService } from '../admin.service';
import { IonModal } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit, OnChanges {
    @Input() updateExercise: Exercise;
    muscles: string[] = [];
    @ViewChild(IonModal) modal: IonModal;
    currentRoute: string = '';
    formAddExercise = new FormGroup({
        muscle: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        name: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        weight: new FormControl(0, [this.noNegativeWeightValidator]),
        sets: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        image: new FormControl('', [Validators.required, Validators.maxLength(200), this.noWhitespaceValidator]),
        description: new FormControl('', [Validators.maxLength(200), this.noWhitespaceValidator]),
    });

    constructor(
        private readonly exercisesService: ExercisesService,
        private readonly adminService: AdminService,
        private readonly router: Router
    ) {
    }

    ngOnInit() {
        this.exercisesService.getAllMusclesName()
            .then((muscles) => {
                this.muscles = muscles;
            });

        this.currentRoute = this.router.url;
    }

    ngOnChanges() {
        if (this.updateExercise) {
            this.formAddExercise.patchValue(this.updateExercise);
            document.getElementById('open-modal').click();
        }
    }

    submit() {
        if (this.formAddExercise.valid) {
            this.addExercise();
            return;
        }
    }

    async addExercise() {
        const { muscle, name, weight, sets, image, description } = this.formAddExercise.value;
        const exercise: Exercise = {
            muscle,
            name,
            weight,
            sets,
            image,
            description,
        };

        await this.adminService.addOrUpdateExercise(exercise);

        // Close the modal
        this.closeModal();
    }

    closeModal() {
        this.modal.dismiss(null, 'cancel');
        this.formAddExercise.reset();
    }

    public noWhitespaceValidator(control: FormControl) {
        return (control.value || '').trim().length ? null : { 'whitespace': true };
    }

    public noNegativeWeightValidator(control: FormControl) {
        return (control.value || '') > 0 ? null : { 'negative': true };
    }
}
