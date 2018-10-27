package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.ProjectViewModel;
import com.netcracker.edu.fapi.service.ProjectDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
public class ProjectDataController {

    @Autowired
    private ProjectDataService projectDataService;

    @RequestMapping
    public ResponseEntity<List<ProjectViewModel>> getAllProjects() {
        return ResponseEntity.ok(projectDataService.getAll());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<ProjectViewModel> saveProject(@RequestBody ProjectViewModel project /* todo server validation*/) {
        if (project != null) {
            return ResponseEntity.ok(projectDataService.saveProject(project));
        }
        return null;
    }

    @RequestMapping(value = "/{project_id}", method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable String projectId) {
        projectDataService.deleteProject(Long.valueOf(projectId));
    }

}
