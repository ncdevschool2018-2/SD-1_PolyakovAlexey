package com.netcracker.backend.service;

import com.netcracker.backend.entity.Comment;

import java.util.Optional;

public interface CommentService {
    Comment save(Comment comment);

    Iterable<Comment> findAll();

    Optional<Comment> findById(Long id);

    void deleteById(Long id);
}
