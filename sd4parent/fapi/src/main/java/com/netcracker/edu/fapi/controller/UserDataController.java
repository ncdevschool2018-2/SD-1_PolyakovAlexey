package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.UserViewModel;
import com.netcracker.edu.fapi.service.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/usr")
public class UserDataController {

    @Autowired
    private UserDataService userDataService;


    @RequestMapping
    public ResponseEntity<List<UserViewModel>> getAllUsers() {
        return ResponseEntity.ok(userDataService.getAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserViewModel> getUserById(@PathVariable(name = "id") Long id) {
        Optional<UserViewModel> user = userDataService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<UserViewModel> saveUser(@RequestBody UserViewModel user /* todo server validation*/) {
        if (user != null) {
            return ResponseEntity.ok(userDataService.saveUser(user));
        }
        return null;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable String id) {
        userDataService.deleteUser(Long.valueOf(id));
    }
}
