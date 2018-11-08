package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Task;
import com.netcracker.edu.backend.repository.TaskRepository;
import com.netcracker.edu.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class TaskServiceImpl implements TaskService {

    private TaskRepository repository;

    @Autowired
    public TaskServiceImpl(TaskRepository repository) {
        this.repository = repository;
    }

    @Override
    public Task saveTask(Task task) {
        return repository.save(task);
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<Task> getAllTasks() {
        return repository.findAll();
    }

    @Override
    public void deleteTask(Long id) {
        repository.deleteById(id);
    }
}
