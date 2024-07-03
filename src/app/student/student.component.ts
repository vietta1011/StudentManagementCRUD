import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  StudentArray: any[] = [];

  studentName: string = "";
  studentAddress: string = "";
  mobile: number = 0;

  currentStudentID = "";

  constructor(private http: HttpClient){
    this.getAllStudent();
  }

  getAllStudent()
  {
    this.http.get("http://localhost:1011/api/v1/student/getAll").subscribe((resultData: any)=>
    {
      this.StudentArray = resultData;
    });
  }

  save()
  {
    if(!this.studentName || !this.studentAddress || !this.mobile) {
      alert("Vui lòng nhập đầy đủ các thông tin!");
    } else{
      if(this.currentStudentID == '') {
        this.register();
      } else {
        this.updateRecords();
      }
    }
  }

  register(){
    let bodyData = {
      "studentName" : this.studentName,
      "studentAddress" : this.studentAddress,
      "mobile" : this.mobile
    };

    this.http.post("http://localhost:1011/api/v1/student/save", bodyData, {responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.getAllStudent();

        this.studentName = '';
        this.studentAddress = '';
        this.mobile = 0;
    });
  }

  updateRecords()
  {
    let bodyData = {
      "studentName" : this.studentName,
      "studentAddress" : this.studentAddress,
      "mobile" : this.mobile
    };

    this.http.put("http://localhost:1011/api/v1/student/edit/"+ this.currentStudentID , bodyData, {responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updated")
        this.getAllStudent();

        this.studentName = '';
        this.studentAddress = '';
        this.mobile = 0;
        this.currentStudentID = '';
    });
  }

  setUpdate(data: any)
  {
    this.studentName = data.studentName;
    this.studentAddress = data.studentAddress;
    this.mobile = data.mobile;
    this.currentStudentID = data._id;
    console.log(data._id);
  }

  cancel(){
    this.studentName = '';
    this.studentAddress = '';
    this.mobile = 0;
    this.currentStudentID = "";
    console.log(this.currentStudentID);
  }

  setDelete(data: any)
  {
    this.http.delete("http://localhost:1011/api/v1/student/delete/"+ data._id, {responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllStudent();

        this.studentName = '';
        this.studentAddress = '';
        this.mobile  = 0;
    });
  }
}
