package com.netcracker.fapi.service;

import com.netcracker.fapi.model.UserViewModel;

import java.util.List;

public interface UserDataService {
    UserViewModel save(UserViewModel user);

    List<UserViewModel> findAll();

    UserViewModel findById(Long id);

    UserViewModel findByUsername(String username);

    void deleteById(Long id);
}
