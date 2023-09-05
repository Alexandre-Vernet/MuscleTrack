import { Injectable } from '@angular/core';
import { deleteField, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { ToastService } from '../toast/toast.service';
import { AddExercise, Exercise } from '../exercises/exercise';

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
        const randomId = Math.random().toString(36).substring(2);
        await setDoc(muscleRef, {
            [randomId]: {
                name: exercise.name,
                sets: exercise.sets,
                description: exercise.description || null,
                image: exercise.image,
                weight: exercise.weight || null,
            }
        }, { merge: true });

        // Display a toast
        this.toastService.showToast('Exercise added');
    }

    async updateExercise(exercise: Exercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await updateDoc(muscleRef, {
            [exercise.id]: {
                name: exercise.name,
                sets: exercise.sets,
                description: exercise.description || null,
                image: exercise.image,
                weight: exercise.weight || null,
            }
        });

        // Display a toast
        this.toastService.showToast('Exercise updated');
    }

    async deleteExercise(exercise: Exercise) {
        console.log(exercise)
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await updateDoc(muscleRef, {
            [exercise.id]: deleteField()
        });

        // Display a toast
        this.toastService.showToast('Exercise deleted');
    }
}
