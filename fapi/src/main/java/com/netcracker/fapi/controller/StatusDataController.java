package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.StatusViewModel;
import com.netcracker.fapi.service.StatusDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/status")
public class StatusDataController {

    private StatusDataService statusDataService;

    @Autowired
    public StatusDataController(StatusDataService statusDataService) {
        this.statusDataService = statusDataService;
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public ResponseEntity<StatusViewModel> findByName(@PathVariable(name = "name") String name) {
        StatusViewModel status = statusDataService.findByName(name);
        if (status != null) {
            return ResponseEntity.ok(status);
        }
        return ResponseEntity.notFound().build();
    }
}
