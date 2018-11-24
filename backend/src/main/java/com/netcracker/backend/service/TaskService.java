package com.netcracker.backend.service;

import com.netcracker.backend.entity.Task;

import java.util.Optional;

public interface TaskService {
    Task save(Task task);

    Iterable<Task> findAll();

    Optional<Task> findById(Long id);

    void deleteById(Long id);
}
