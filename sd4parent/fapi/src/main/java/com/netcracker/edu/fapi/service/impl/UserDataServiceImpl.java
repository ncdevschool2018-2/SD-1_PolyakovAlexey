package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.UserViewModel;
import com.netcracker.edu.fapi.service.UserDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service(value = "userService")
public class UserDataServiceImpl implements UserDataService, UserDetailsService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<UserViewModel> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        UserViewModel[] userViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/users/", UserViewModel[].class);
        return userViewModelResponse == null ? Collections.emptyList() : Arrays.asList(userViewModelResponse);
    }

    @Override
    public Optional<UserViewModel> getUserById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/users/" + id, Optional.class);
    }

    @Override
    public UserViewModel getUserByUsername(String username) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/users/login/" + username, UserViewModel.class);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserViewModel user = getUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    @Override
    public UserViewModel saveUser(UserViewModel user) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/users", user, UserViewModel.class).getBody();
    }

    @Override
    public void deleteUser(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/users/" + id);
    }

    private List<SimpleGrantedAuthority> getAuthority(UserViewModel user) {
        return Arrays.asList(new SimpleGrantedAuthority(user.getRole().toString()));
    }
}
