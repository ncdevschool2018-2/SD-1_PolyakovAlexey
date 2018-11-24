package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Project;
import com.netcracker.backend.service.ProjectService;
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

    @RequestMapping(method = RequestMethod.POST)
    public Project save(@RequestBody Project project) {
        return projectService.save(project);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Project> findAll() {
        return projectService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Project> findById(@PathVariable(name = "id") Long id) {
        Optional<Project> project = projectService.findById(id);
        if (project.isPresent()) {
            return ResponseEntity.ok(project.get());
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteById(@PathVariable(name = "id") Long id) {
        projectService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
