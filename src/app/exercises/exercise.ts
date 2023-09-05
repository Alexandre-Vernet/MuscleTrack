export interface Exercise {
    id: string;
    muscle: string;
    name: string;
    sets: string;
    image: string;
    weight?: number;
    description?: string;
}

export interface AddExercise {
    muscle: string;
    name: string;
    sets: string;
    image: string;
    weight?: number;
    description?: string;
}
