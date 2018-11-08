package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.TaskViewModel;

import java.util.List;

public interface TaskDataService {
    List<TaskViewModel> getAll();

    TaskViewModel getTaskById(Long id);

    TaskViewModel saveTask(TaskViewModel task);

    void deleteTask(Long id);
}
