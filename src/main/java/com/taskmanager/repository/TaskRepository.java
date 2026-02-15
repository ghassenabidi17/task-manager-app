package com.taskmanager.repository;

import com.taskmanager.domain.Task;
import com.taskmanager.domain.enumeration.TaskStatus;
import java.io.ObjectInputFilter.Status;
import java.util.List;
import java.util.function.Function;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Task entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(TaskStatus status);
}
/**
Maps to /by-status/{status}
Takes TaskStatus as a @PathVariable
Calls taskRepository.findByStatus(status)
Returns a ResponseEntity<List<Task>>
*/
