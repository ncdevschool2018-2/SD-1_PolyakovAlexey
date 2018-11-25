package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Status;
import com.netcracker.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/statuses")
public class StatusController {

    private StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public ResponseEntity<Status> findByName(@PathVariable(name = "name") String name) {
        Optional<Status> status = statusService.findByName(name);
        if (status.isPresent()) {
            return ResponseEntity.ok(status.get());
        }
        return ResponseEntity.notFound().build();
    }
}
