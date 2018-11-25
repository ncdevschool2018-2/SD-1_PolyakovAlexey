package com.netcracker.backend.service.impl;

import com.netcracker.backend.entity.Role;
import com.netcracker.backend.repository.RoleRepository;
import com.netcracker.backend.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

    private RoleRepository repository;

    @Autowired
    public RoleServiceImpl(RoleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Role> findAll() {
        return repository.findAll();
    }
}
