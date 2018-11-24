package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.CommentViewModel;
import com.netcracker.fapi.service.CommentDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentDataController {

    private CommentDataService commentDataService;

    @Autowired
    public CommentDataController(CommentDataService commentDataService) {
        this.commentDataService = commentDataService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<CommentViewModel> save(@RequestBody CommentViewModel comment) {
        if (comment != null) {
            return ResponseEntity.ok(commentDataService.save(comment));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CommentViewModel>> findAll() {
        return ResponseEntity.ok(commentDataService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<CommentViewModel> findById(@PathVariable(name = "id") Long id) {
        CommentViewModel comment = commentDataService.findById(id);
        if (comment != null) {
            return ResponseEntity.ok(comment);
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable(name = "id") Long id) {
        commentDataService.deleteById(id);
    }
}
