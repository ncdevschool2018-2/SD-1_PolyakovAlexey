package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.netcracker.edu.fapi.models.enums.UserRoleViewModel;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserViewModel {
    private long id;
    private String username;
    private String password;
    private UserRoleViewModel role;
    private long currentProjectId;

    public UserViewModel(long id, String username, String password, UserRoleViewModel role, long currentProjectId) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.currentProjectId = currentProjectId;
    }

    public UserViewModel() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRoleViewModel getRole() {
        return role;
    }

    public void setRole(UserRoleViewModel role) {
        this.role = role;
    }

    public long getCurrentProjectId() {
        return currentProjectId;
    }

    public void setCurrentProjectId(long currentProjectId) {
        this.currentProjectId = currentProjectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserViewModel that = (UserViewModel) o;
        return id == that.id &&
                Objects.equals(username, that.username) &&
                Objects.equals(password, that.password) &&
                role == that.role &&
                currentProjectId == that.currentProjectId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, role, currentProjectId);
    }

    @Override
    public String
    toString() {
        return "UserViewModel{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role + '\'' +
                ", currentProjectId=" + currentProjectId +
                '}';
    }
}
