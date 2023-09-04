import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from "../../exercises/exercises.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Exercise } from "../../exercises/exercise";
import { AdminService } from "../admin.service";
import { IonModal } from "@ionic/angular";

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit, OnChanges {
    @Input() updateExercise: Exercise;
    muscles: string[] = [];
    @ViewChild(IonModal) modal: IonModal;
    formAddExercise = new FormGroup({
        muscle: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        reps: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        description: new FormControl(''),
    });

    constructor(
        private readonly exercisesService: ExercisesService,
        private readonly adminService: AdminService,
    ) {
    }

    ngOnInit() {
        this.exercisesService.getAllMusclesName()
            .then((muscles) => {
                this.muscles = muscles;
            });
    }

    ngOnChanges() {
        if (this.updateExercise) {
            this.formAddExercise.patchValue(this.updateExercise);
            document.getElementById("open-modal").click();
        }
    }

    submit() {
        if (this.formAddExercise.valid) {
            this.addExercise();
        }
    }

    async addExercise() {
        const { muscle, name, reps, image, description } = this.formAddExercise.value;
        const exercise: Exercise = {
            muscle,
            name,
            reps,
            image,
            description,
        };

        await this.adminService.addOrUpdateExercise(exercise);

        // Close the modal
        this.closeModal()
    }

    closeModal() {
        this.modal.dismiss(null, 'cancel');
        this.formAddExercise.reset();
    }
}
