package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Task;
import com.netcracker.edu.backend.service.TaskService;
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

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Task> getTaskById(@PathVariable(name = "id") Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Task saveTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteTask(@PathVariable(name = "id") Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
