package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.RoleViewModel;
import com.netcracker.fapi.service.RoleDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleDataController {

    private RoleDataService roleDataService;

    @Autowired
    public RoleDataController(RoleDataService roleDataService) {
        this.roleDataService = roleDataService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<RoleViewModel>> findAll() {
        return ResponseEntity.ok(roleDataService.findAll());
    }
}
