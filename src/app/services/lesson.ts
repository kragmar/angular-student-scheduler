import { Student } from './student';
import { Teacher } from './teacher';

export class Lesson {
  _id?: string;
  lessonDate: Date;
  lessonStart: string;
  lessonType: string;
  student: Student;
  //teacher: Teacher;
}