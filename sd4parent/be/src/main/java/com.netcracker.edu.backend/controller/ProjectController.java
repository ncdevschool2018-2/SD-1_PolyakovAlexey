package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Project;
import com.netcracker.edu.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Project> getProjectById(@PathVariable(name = "id") Long id) {
        Optional<Project> project = projectService.getProjectById(id);
        if (project.isPresent()) {
            return ResponseEntity.ok(project.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Project saveProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteProject(@PathVariable(name = "id") Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}
