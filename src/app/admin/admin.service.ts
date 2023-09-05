import { Injectable } from '@angular/core';
import { deleteField, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { ToastService } from '../toast/toast.service';
import { Exercise } from '../exercises/exercise';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    db = getFirestore();

    constructor(
        private readonly toastService: ToastService,
    ) {
    }

    async addOrUpdateExercise(exercise: Exercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await setDoc(muscleRef, {
            [exercise.name]: {
                sets: exercise.sets,
                description: exercise.description,
                image: exercise.image,
            }
        }, { merge: true });

        // Display a toast
        this.toastService.showToast('Exercise added');
    }

    async deleteExercise(exercise: Exercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await updateDoc(muscleRef, {
            [exercise.name]: deleteField()
        });

        // Display a toast
        this.toastService.showToast('Exercise deleted');
    }
}
