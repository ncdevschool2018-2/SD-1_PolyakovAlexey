package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Task;
import com.netcracker.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Task save(@RequestBody Task task) {
        return taskService.save(task);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Task> findAll() {
        return taskService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Task> findById(@PathVariable(name = "id") Long id) {
        Optional<Task> task = taskService.findById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteById(@PathVariable(name = "id") Long id) {
        taskService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
