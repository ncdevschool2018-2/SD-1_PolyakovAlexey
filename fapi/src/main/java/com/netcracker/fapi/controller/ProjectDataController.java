package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.ProjectViewModel;
import com.netcracker.fapi.service.ProjectDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
public class ProjectDataController {

    private ProjectDataService projectDataService;

    @Autowired
    public ProjectDataController(ProjectDataService projectDataService) {
        this.projectDataService = projectDataService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<ProjectViewModel> save(@RequestBody ProjectViewModel project) {
        if (project != null) {
            return ResponseEntity.ok(projectDataService.save(project));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ProjectViewModel>> findAll() {
        return ResponseEntity.ok(projectDataService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<ProjectViewModel> findById(@PathVariable(name = "id") Long id) {
        ProjectViewModel project = projectDataService.findById(id);
        if (project != null) {
            return ResponseEntity.ok(project);
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable(name = "id") Long id) {
        projectDataService.deleteById(id);
    }
}
