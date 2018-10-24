package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.TaskViewModel;
import com.netcracker.edu.fapi.service.TaskDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskDataController {

    @Autowired
    private TaskDataService taskDataService;

    @RequestMapping
    public ResponseEntity<List<TaskViewModel>> getAllTasks() {
        return ResponseEntity.ok(taskDataService.getAll());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<TaskViewModel> saveTask(@RequestBody TaskViewModel task /* todo server validation*/) {
        if (task != null) {
            return ResponseEntity.ok(taskDataService.saveTask(task));
        }
        return null;
    }

    @RequestMapping(value = "/{task_id}", method = RequestMethod.DELETE)
    public void deleteTask(@PathVariable String task_id) {
        taskDataService.deleteTask(Long.valueOf(task_id));
    }
}
