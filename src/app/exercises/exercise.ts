export interface Exercise {
    name: string;
    reps: string;
    image: string;
    weight?: string;
    description?: string;
}

export interface AddExercise {
    muscle: string;
    name: string;
    reps: string;
    image: string;
    description: string;
}
