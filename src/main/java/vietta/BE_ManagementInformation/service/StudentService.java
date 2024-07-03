package vietta.BE_ManagementInformation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vietta.BE_ManagementInformation.entity.Student;
import vietta.BE_ManagementInformation.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void saveOrUpdate(Student students) {
        studentRepository.save(students);
    }

    public Iterable<Student> listAll() {
        return this.studentRepository.findAll();
    }

    public void deleteStudent(String id) {
        studentRepository.deleteById(id);
    }

    public Student getStudentById(String _id) {
         return studentRepository.findById(_id).get();
    }
}
