package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.RoleViewModel;
import com.netcracker.fapi.service.RoleDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("roleDataService")
public class RoleDataServiceImpl implements RoleDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<RoleViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        RoleViewModel[] projectViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/roles", RoleViewModel[].class);
        return projectViewModelResponse == null ? Collections.emptyList() : Arrays.asList(projectViewModelResponse);
    }
}
