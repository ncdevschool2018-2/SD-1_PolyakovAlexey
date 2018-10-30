package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_roles")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userRoleId;
    private String roleName;

    public UserRole(String roleName) {
        this.roleName = roleName;
    }

    public UserRole() {

    }

    public long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRole userRole = (UserRole) o;
        return userRoleId == userRole.userRoleId &&
                Objects.equals(roleName, userRole.roleName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userRoleId, roleName);
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "userRoleId=" + userRoleId +
                ", roleName='" + roleName + '\'' +
                '}';
    }
}
