package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.TaskViewModel;
import com.netcracker.edu.fapi.service.TaskDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TaskDataServiceImpl implements TaskDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<TaskViewModel> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        TaskViewModel[] taskViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/test_tasks/", TaskViewModel[].class);
        return taskViewModelResponse == null ? Collections.emptyList() : Arrays.asList(taskViewModelResponse);
    }

    @Override
    public TaskViewModel getTaskById(Long task_id) {
        return null;
    }

    @Override
    public TaskViewModel saveTask(TaskViewModel task) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/test_tasks", task, TaskViewModel.class).getBody();
    }

    @Override
    public void deleteTask(Long task_id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/test_tasks/" + task_id);
    }
}
