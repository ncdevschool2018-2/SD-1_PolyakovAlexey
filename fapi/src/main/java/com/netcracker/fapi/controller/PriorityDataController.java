package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.PriorityViewModel;
import com.netcracker.fapi.service.PriorityDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/priority")
public class PriorityDataController {

    private PriorityDataService priorityDataService;

    @Autowired
    public PriorityDataController(PriorityDataService priorityDataService) {
        this.priorityDataService = priorityDataService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<PriorityViewModel>> findAll() {
        return ResponseEntity.ok(priorityDataService.findAll());
    }
}
