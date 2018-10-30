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

    @RequestMapping(value = "/{project_id}", method = RequestMethod.GET)
    public ResponseEntity<Project> getProjectById(@PathVariable(name = "project_id") Long projectId) {
        Optional<Project> project = projectService.getProjectById(projectId);
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

    @RequestMapping(value = "/{project_id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteProject(@PathVariable(name = "project_id") Long projectId) {
        projectService.deleteProject(projectId);
        return ResponseEntity.noContent().build();
    }
}
