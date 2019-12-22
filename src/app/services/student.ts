import { Lesson } from './lesson';

export class Student {
    id: number;
    name: string;
    telNum: string;
    email: string;
    birthDate: Date;
    lesson: Lesson[];
}