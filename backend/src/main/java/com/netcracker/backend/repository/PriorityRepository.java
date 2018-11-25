package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Priority;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriorityRepository extends CrudRepository<Priority, Short> {
}
