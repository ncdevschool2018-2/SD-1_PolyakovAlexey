package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Task;

import java.util.Optional;

public interface TaskService {
    Task saveTask(Task task);
    Optional<Task> getTaskById(Long task_id);
    Iterable<Task> getAllTasks();
    void deleteTask(Long task_id);
}
