package com.netcracker.backend.service;

import com.netcracker.backend.entity.Role;

public interface RoleService {
    Iterable<Role> findAll();
}
