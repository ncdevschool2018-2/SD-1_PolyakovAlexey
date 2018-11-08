package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.ProjectViewModel;

import java.util.List;

public interface ProjectDataService {
    List<ProjectViewModel> getAll();

    ProjectViewModel getProjectById(Long id);

    ProjectViewModel saveProject(ProjectViewModel project);

    void deleteProject(Long id);
}
