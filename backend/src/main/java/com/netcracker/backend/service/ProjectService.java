package com.netcracker.backend.service;

import com.netcracker.backend.entity.Project;

import java.util.Optional;

public interface ProjectService {
    Project save(Project project);

    Iterable<Project> findAll();

    Optional<Project> findById(Long id);

    void deleteById(Long id);
}
