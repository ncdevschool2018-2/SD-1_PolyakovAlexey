package com.netcracker.fapi.service;

import com.netcracker.fapi.model.TaskViewModel;

import java.util.List;

public interface TaskDataService {
    TaskViewModel save(TaskViewModel task);

    List<TaskViewModel> findAll();

    TaskViewModel findById(Long id);

    void deleteById(Long id);
}
