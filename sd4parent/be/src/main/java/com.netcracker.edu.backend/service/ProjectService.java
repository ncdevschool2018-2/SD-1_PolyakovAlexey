package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Project;

import java.util.Optional;

public interface ProjectService {
    Project saveProject(Project project);

    Optional<Project> getProjectById(Long id);

    Iterable<Project> getAllProjects();

    void deleteProject(Long id);
}
