package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.PriorityViewModel;
import com.netcracker.fapi.service.PriorityDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("priorityDataService")
public class PriorityDataServiceImpl implements PriorityDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<PriorityViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        PriorityViewModel[] projectViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/priorities", PriorityViewModel[].class);
        return projectViewModelResponse == null ? Collections.emptyList() : Arrays.asList(projectViewModelResponse);
    }
}
