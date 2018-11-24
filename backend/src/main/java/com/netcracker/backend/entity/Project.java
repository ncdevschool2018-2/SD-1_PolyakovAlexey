package com.netcracker.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private String description;
    @ManyToOne
    private User owner;
    private Date created;
    private Date updated;
    private Date closed;

    @JsonIgnore
    @ManyToMany(mappedBy = "projects")
    private List<User> users = new ArrayList<>();

    public Project() {

    }

    public Project(String code, String description, User owner, Date created, Date updated, Date closed) {
        this.code = code;
        this.description = description;
        this.owner = owner;
        this.created = created;
        this.updated = updated;
        this.closed = closed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Date getClosed() {
        return closed;
    }

    public void setClosed(Date closed) {
        this.closed = closed;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return Objects.equals(id, project.id) &&
                Objects.equals(code, project.code) &&
                Objects.equals(description, project.description) &&
                Objects.equals(owner, project.owner) &&
                Objects.equals(created, project.created) &&
                Objects.equals(updated, project.updated) &&
                Objects.equals(closed, project.closed) &&
                Objects.equals(users, project.users);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, description, owner, created, updated, closed, users);
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", owner=" + owner +
                ", created=" + created +
                ", updated=" + updated +
                ", closed=" + closed +
                ", users=" + users +
                '}';
    }
}
