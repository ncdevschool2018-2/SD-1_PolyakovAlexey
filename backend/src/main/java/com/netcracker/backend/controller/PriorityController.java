package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Priority;
import com.netcracker.backend.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/priorities")
public class PriorityController {

    private PriorityService priorityService;

    @Autowired
    public PriorityController(PriorityService priorityService) {
        this.priorityService = priorityService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Priority> findAll() {
        return priorityService.findAll();
    }
}
