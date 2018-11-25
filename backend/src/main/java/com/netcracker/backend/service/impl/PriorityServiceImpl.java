package com.netcracker.backend.service.impl;

import com.netcracker.backend.entity.Priority;
import com.netcracker.backend.repository.PriorityRepository;
import com.netcracker.backend.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("priorityService")
public class PriorityServiceImpl implements PriorityService {

    private PriorityRepository repository;

    @Autowired
    public PriorityServiceImpl(PriorityRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Priority> findAll() {
        return repository.findAll();
    }
}
