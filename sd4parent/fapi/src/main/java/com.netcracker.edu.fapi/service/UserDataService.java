package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.UserViewModel;

import java.util.List;

public interface UserDataService {
    List<UserViewModel> getAll();
    UserViewModel getUserById(Long userId);
    UserViewModel saveUser(UserViewModel user);
    void deleteUser(Long userId);
}
