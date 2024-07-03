package vietta.BE_ManagementInformation.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import vietta.BE_ManagementInformation.entity.Student;

public interface StudentRepository extends MongoRepository<Student, String> {
}
