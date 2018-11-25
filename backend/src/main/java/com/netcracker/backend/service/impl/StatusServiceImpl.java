package com.netcracker.backend.service.impl;

import com.netcracker.backend.entity.Status;
import com.netcracker.backend.repository.StatusRepository;
import com.netcracker.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("statusService")
public class StatusServiceImpl implements StatusService {

    private StatusRepository repository;

    @Autowired
    public StatusServiceImpl(StatusRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<Status> findByName(String name) {
        return repository.findByName(name);
    }
}
