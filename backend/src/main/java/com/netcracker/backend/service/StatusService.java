package com.netcracker.backend.service;

import com.netcracker.backend.entity.Status;

import java.util.Optional;

public interface StatusService {
    Optional<Status> findByName(String name);
}
