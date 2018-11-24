package com.netcracker.fapi.service;

import com.netcracker.fapi.model.ProjectViewModel;

import java.util.List;

public interface ProjectDataService {
    ProjectViewModel save(ProjectViewModel project);

    List<ProjectViewModel> findAll();

    ProjectViewModel findById(Long id);

    void deleteById(Long id);
}
