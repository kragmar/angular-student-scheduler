import { Lesson } from './lesson';

export class Teacher {
    id: number;
    name: string;
    telNum: string;
    email: string;
    username: string;
    password: string;
    role: string;
    lesson: Lesson[];
}