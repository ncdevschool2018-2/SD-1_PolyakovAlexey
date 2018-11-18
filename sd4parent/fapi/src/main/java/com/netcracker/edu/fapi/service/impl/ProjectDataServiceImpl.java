package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.ProjectViewModel;
import com.netcracker.edu.fapi.service.ProjectDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service(value = "projectService")
public class ProjectDataServiceImpl implements ProjectDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public List<ProjectViewModel> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        ProjectViewModel[] projectViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/projects/", ProjectViewModel[].class);
        return projectViewModelResponse == null ? Collections.emptyList() : Arrays.asList(projectViewModelResponse);
    }

    @Override
    public ProjectViewModel getProjectById(Long id) {
        return null;
    }

    @Override
    public ProjectViewModel saveProject(ProjectViewModel project) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/projects", project, ProjectViewModel.class).getBody();
    }

    @Override
    public void deleteProject(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/projects/" + id);
    }
}
