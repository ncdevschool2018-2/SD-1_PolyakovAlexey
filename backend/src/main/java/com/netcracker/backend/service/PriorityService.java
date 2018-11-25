package com.netcracker.backend.service;

import com.netcracker.backend.entity.Priority;

public interface PriorityService {
    Iterable<Priority> findAll();
}
