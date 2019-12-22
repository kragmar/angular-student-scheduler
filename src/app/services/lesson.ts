import { Student } from './student';
import { Teacher } from './teacher';

export class Lesson {
  /* id: number; */
  lessonDate: string;
  lessonStart: string;
  lessonType: string;
  student: Student;
  teacher: Teacher;
}