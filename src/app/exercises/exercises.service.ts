import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { Exercise } from './exercise';

@Injectable({
    providedIn: 'root'
})
export class ExercisesService {

    db = getFirestore();

    constructor() {
    }

    async getAllMusclesName(): Promise<string[]> {
        const q = query(collection(this.db, 'exercises'));
        const exercises: string[] = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            exercises.push(doc.id);
        });
        exercises.sort((a, b) => {
            return a.localeCompare(b);
        });
        return exercises;
    }

    async getExercises(muscleName: string): Promise<Exercise[]> {
        const docRef = doc(this.db, 'exercises', muscleName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const exercises: Exercise[] = Object.keys(docSnap.data()).map((id) => {
                return {
                    id: id,
                    muscle: muscleName,
                    name: docSnap.data()[id].name,
                    sets: docSnap.data()[id].sets,
                    image: docSnap.data()[id].image,
                    weight: docSnap.data()[id].weight
                };
            });
            exercises.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            return exercises;
        } else {
            return [];
        }
    }

    async getExerciseInfo(muscleName: string, exerciseName: string): Promise<Exercise> {
        const docRef = doc(this.db, 'exercises', muscleName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                ...docSnap.data()[exerciseName],
                name: exerciseName
            }
        } else {
            return {
                id: '',
                muscle: '',
                name: '',
                sets: '0',
                image: '',
                weight: 0
            }
        }
    }

    async decreaseWeight(exercise: Exercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await setDoc(muscleRef, {
            [exercise.name]: {
                weight: exercise.weight - 1.25,
            }
        }, { merge: true });
        return exercise.weight - 1.25;
    }

    async increaseWeight(exercise: Exercise) {
        const muscleRef = doc(this.db, 'exercises', exercise.muscle);
        await setDoc(muscleRef, {
            [exercise.name]: {
                weight: exercise.weight + 1.25,
            }
        }, { merge: true });
        return exercise.weight + 1.25;
    }
}
