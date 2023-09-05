import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';
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
            const exercises: Exercise[] = Object.keys(docSnap.data()).map((key) => {
                return {
                    muscle: muscleName,
                    name: key,
                    sets: docSnap.data()[key].sets,
                    image: docSnap.data()[key].image,
                    weight: docSnap.data()[key].weight
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
                muscle: '',
                name: '',
                sets: '0',
                image: '',
                weight: '0'
            }
        }
    }
}
