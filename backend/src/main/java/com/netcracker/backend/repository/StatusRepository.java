package com.netcracker.backend.repository;

import com.netcracker.backend.entity.Status;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StatusRepository extends CrudRepository<Status, Short> {
    @Query(value = "SELECT * FROM statuses WHERE name = :name", nativeQuery = true)
    Optional<Status> findByName(@Param("name") String name);
}
