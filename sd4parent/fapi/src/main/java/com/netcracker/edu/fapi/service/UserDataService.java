package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.UserViewModel;

import java.util.List;
import java.util.Optional;

public interface UserDataService {
    List<UserViewModel> getAll();

    Optional<UserViewModel> getUserById(Long id);

    Optional<UserViewModel> getUserByUsername(String username);

    UserViewModel saveUser(UserViewModel user);

    void deleteUser(Long id);
}
