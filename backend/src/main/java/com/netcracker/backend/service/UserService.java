package com.netcracker.backend.service;

import com.netcracker.backend.entity.User;

import java.util.Optional;

public interface UserService {
    User save(User user);

    Iterable<User> findAll();

    Optional<User> findById(Long id);

    Optional<User> findByUsername(String username);

    void deleteById(Long id);
}
