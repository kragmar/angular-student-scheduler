import { Lesson } from './lesson';

export const LESSONS: Lesson[] = [
  {
    _id: "1",
    lessonDate: new Date("2020-02-24T00:00:00.000Z"),
    lessonStart: "12:50",
    lessonType: "Tanóra",
    student:  {
        _id: "1",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: new Date("1970-01-01")
    }
  },
  {
    _id: "2",
    lessonDate: new Date("2020-02-24T00:00:00.000Z"),
    lessonStart: "13:40",
    lessonType: "Tanóra",
    student:  {
        _id: "1",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: new Date("1970-01-01")
    }
  },
  {
    _id: "3",
    lessonDate: new Date("2020-02-21T00:00:00.000Z"),
    lessonStart: "14:30",
    lessonType: "Tanóra",
    student:  {
        _id: "1",
        name: "Teszt Elek",
        telNum: "+36 20 123 4567",
        email: "test@test.hu",
        birthDate: new Date("1970-01-01")
    }
  },
  {
    _id: "4",
    lessonDate: new Date("2020-02-20T00:00:00.000Z"),
    lessonStart: "15:20",
    lessonType: "Tanóra",
    student:  {
      _id: "2",
      name: "Hali Gali",
      telNum: "+36 20 123 4567",
      email: "test@test.hu",
      birthDate: new Date("2000-01-01")
    }
  },
  {
    _id: "5",
    lessonDate: new Date("2020-02-19T00:00:00.000Z"),
    lessonStart: "16:10",
    lessonType: "Tanóra",
    student:  {
      _id: "2",
      name: "Hali Gali",
      telNum: "+36 20 123 4567",
      email: "test@test.hu",
      birthDate: new Date("2000-01-01")
    }
  }
]