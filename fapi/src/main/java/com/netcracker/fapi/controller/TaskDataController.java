package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.TaskViewModel;
import com.netcracker.fapi.service.TaskDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskDataController {

    private TaskDataService taskDataService;

    @Autowired
    public TaskDataController(TaskDataService taskDataService) {
        this.taskDataService = taskDataService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<TaskViewModel> save(@RequestBody TaskViewModel task) {
        if (task != null) {
            return ResponseEntity.ok(taskDataService.save(task));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<TaskViewModel>> findAll() {
        return ResponseEntity.ok(taskDataService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<TaskViewModel> findById(@PathVariable(name = "id") Long id) {
        TaskViewModel task = taskDataService.findById(id);
        if (task != null) {
            return ResponseEntity.ok(task);
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable(name = "id") Long id) {
        taskDataService.deleteById(id);
    }
}
