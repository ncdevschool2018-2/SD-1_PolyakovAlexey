package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.UserViewModel;
import com.netcracker.fapi.service.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserDataController {

    private UserDataService userDataService;

    @Autowired
    public UserDataController(UserDataService userDataService) {
        this.userDataService = userDataService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<UserViewModel> save(@RequestBody UserViewModel user) {
        if (user != null) {
            return ResponseEntity.ok(userDataService.save(user));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<UserViewModel>> findAll() {
        return ResponseEntity.ok(userDataService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserViewModel> findById(@PathVariable(name = "id") Long id) {
        UserViewModel user = userDataService.findById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable(name = "id") Long id) {
        userDataService.deleteById(id);
    }
}
