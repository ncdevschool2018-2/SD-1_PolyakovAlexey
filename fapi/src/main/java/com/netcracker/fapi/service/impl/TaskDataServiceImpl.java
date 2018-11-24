package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.TaskViewModel;
import com.netcracker.fapi.service.TaskDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("taskDataService")
public class TaskDataServiceImpl implements TaskDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public TaskViewModel save(TaskViewModel task) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/tasks", task, TaskViewModel.class).getBody();
    }

    @Override
    public List<TaskViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        TaskViewModel[] taskViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/tasks", TaskViewModel[].class);
        return taskViewModelResponse == null ? Collections.emptyList() : Arrays.asList(taskViewModelResponse);
    }

    @Override
    public TaskViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/tasks/" + id, TaskViewModel.class);
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/tasks/" + id);
    }
}
