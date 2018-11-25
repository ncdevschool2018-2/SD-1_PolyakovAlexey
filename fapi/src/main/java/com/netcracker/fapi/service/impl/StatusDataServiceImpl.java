package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.StatusViewModel;
import com.netcracker.fapi.service.StatusDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service("statusDataService")
public class StatusDataServiceImpl implements StatusDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public StatusViewModel findByName(String name) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/statuses/" + name, StatusViewModel.class);
    }
}
