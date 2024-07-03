package vietta.BE_ManagementInformation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vietta.BE_ManagementInformation.entity.Student;
import vietta.BE_ManagementInformation.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    // Lưu 1 học sinh mới
    @PostMapping(value = "/save")
    public String saveStudent(@RequestBody Student students){
        studentService.saveOrUpdate(students);
        return students.get_id();
    }

    // Lấy thông tin tất cả các học sinh
    @GetMapping(value = "/getAll")
    public Iterable<Student> getStudent(){
        return studentService.listAll();
    }

    // Sửa thông tin của 1 học sinh
    @PutMapping(value = "/edit/{id}")
    public Student update(@RequestBody Student student, @PathVariable(name = "id") String _id){
        student.set_id(_id);
        studentService.saveOrUpdate(student);
        return student;
    }

    // Xóa 1 học sinh
    @DeleteMapping(value = "/delete/{id}")
    public void deleteStudent(@PathVariable(name = "id") String _id){
        studentService.deleteStudent(_id);
    }

    // Lấy thông tin của 1 học sinh
    @RequestMapping("/search/{id}")
    public Student getStudent(@PathVariable(name = "id") String _id){
        return studentService.getStudentById(_id);
    }
}
