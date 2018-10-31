package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Project;
import com.netcracker.edu.backend.repository.ProjectRepository;
import com.netcracker.edu.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository repository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository repository) {
        this.repository = repository;
    }

    @Override
    public Project saveProject(Project project) {
        return repository.save(project);
    }

    @Override
    public Optional<Project> getProjectById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<Project> getAllProjects() {
        return repository.findAll();
    }

    @Override
    public void deleteProject(Long id) {
        repository.deleteById(id);
    }
}
