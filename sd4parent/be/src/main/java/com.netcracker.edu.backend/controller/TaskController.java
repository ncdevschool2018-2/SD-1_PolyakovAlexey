package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Task;
import com.netcracker.edu.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/test_tasks")
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(value = "/{task_id}", method = RequestMethod.GET)
    public ResponseEntity<Task> getTaskById(@PathVariable(name = "task_id") Long task_id) {
        Optional<Task> task = taskService.getTaskById(task_id);
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

    @RequestMapping(value = "/{task_id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteTask(@PathVariable(name = "task_id") Long task_id) {
        taskService.deleteTask(task_id);
        return ResponseEntity.noContent().build();
    }
}
