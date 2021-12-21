import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Student } from '../model/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student [] = new Array();

  constructor() {
    this.students.push({
      name: 'Daniel Alejandro Rojo Amparo',
      controlnumber: '17401071',
      active: true
    })
    this.students.push({
      name: 'Miguel Martinez Lopez',
      controlnumber: '17401072',
      active: true
    })
    this.students.push({
      name: 'Carlos Sanches Gimenez',
      controlnumber: '17401073',
      active: false
    })
   }
   getStudents(): Student[]{
     return this.students;
   }
   changeStatus(position: number): void {
    this.students[position].active = !this.students[position].active;
   }
   deleteStudent(position: number): void{
    this.students.splice(position, 1);
   }
   newStudent (Student: Student): void {
    this.students.push(Student);
   }
}