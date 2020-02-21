import { Lesson } from './lesson';

export const LESSONS: Lesson[] = [
  {
    _id: "1",
    lessonDate: "2020-02-24T00:00:00.000Z",
    lessonStart: "12:50",
    lessonType: "Tanóra",
    student:  {
        _id: "5e21e6d87c213e47b9cc08be",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: "1970-01-01"
    }
  },
  {
    _id: "2",
    lessonDate: "2020-02-24T00:00:00.000Z",
    lessonStart: "13:40",
    lessonType: "Tanóra",
    student:  {
        _id: "5e21e6d87c213e47b9cc08be",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: "1970-01-01"
    }
  },
  {
    _id: "3",
    lessonDate: "2020-02-21T00:00:00.000Z",
    lessonStart: "14:30",
    lessonType: "Tanóra",
    student:  {
        _id: "5e21e6d87c213e47b9cc08be",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: "1970-01-01"
    }
  }
]