package com.netcracker.backend.service;

import com.netcracker.backend.entity.User;

import java.util.Optional;

public interface UserService {
    User save(User user);

    Iterable<User> findAll();

    Optional<User> findById(Long id);

    void deleteById(Long id);
}
