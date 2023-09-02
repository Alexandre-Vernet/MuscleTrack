import { Injectable } from '@angular/core';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { AddExercise } from "../exercises/exercise";
import { ToastService } from "../toast/toast.service";

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    db = getFirestore();

    constructor(
        private readonly toastService: ToastService,
    ) {
    }

    async addExercise(exercise: AddExercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await setDoc(muscleRef, {
            [exercise.name]: {
                reps: exercise.reps,
                description: exercise.description,
                image: exercise.image,
            }
        }, { merge: true });

        // Display a toast
        this.toastService.showToast('Exercise added');

    }
}
