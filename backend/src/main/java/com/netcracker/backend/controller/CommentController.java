package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Comment;
import com.netcracker.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Comment save(@RequestBody Comment comment) {
        return commentService.save(comment);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Comment> findAll() {
        return commentService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Comment> findById(@PathVariable(name = "id") Long id) {
        Optional<Comment> comment = commentService.findById(id);
        if (comment.isPresent()) {
            return ResponseEntity.ok(comment.get());
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteById(@PathVariable(name = "id") Long id) {
        commentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
