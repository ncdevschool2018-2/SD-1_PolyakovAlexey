package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.ProjectViewModel;
import com.netcracker.fapi.service.ProjectDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("projectDataService")
public class ProjectDataServiceImpl implements ProjectDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public ProjectViewModel save(ProjectViewModel project) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/projects", project, ProjectViewModel.class).getBody();
    }

    @Override
    public List<ProjectViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        ProjectViewModel[] projectViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/projects", ProjectViewModel[].class);
        return projectViewModelResponse == null ? Collections.emptyList() : Arrays.asList(projectViewModelResponse);
    }

    @Override
    public ProjectViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/projects/" + id, ProjectViewModel.class);
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/projects/" + id);
    }
}
