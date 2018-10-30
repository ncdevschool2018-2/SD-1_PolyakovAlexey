package com.netcracker.edu.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity(name = "User")
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    private String username;
    private String email;
    private String password;
    private long userRoleId;

    // TODO: Создать необходимые связи для полей
//    @OneToMany(
//            mappedBy = "user",
//            cascade = CascadeType.ALL,
//            orphanRemoval = true
//    )
//    private Set<Task> tasks;

    public User(String username, String email, String password, long userRoleId) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRoleId = userRoleId;
        //this.tasks = tasks;
    }

    public User() {

    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(long userRoleId) {
        this.userRoleId = userRoleId;
    }

//    public Set<Task> getTasks() {
//        return tasks;
//    }
//
//    public void setTasks(Set<Task> tasks) {
//        this.tasks = tasks;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId &&
                userRoleId == user.userRoleId &&
                Objects.equals(username, user.username) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
                // Objects.equals(tasks, user.tasks);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, email, password, userRoleId);
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userRoleId=" + userRoleId +
               // ", tasks=" + tasks +
                '}';
    }
}
