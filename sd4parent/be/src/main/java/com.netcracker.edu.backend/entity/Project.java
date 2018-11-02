package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String code;
    @ManyToOne
    private User owner;
    private String description;
    private Date created;
    private Date closed;

    public Project(String code, User owner, String description, Date created, Date closed) {
        this.code = code;
        this.owner = owner;
        this.description = description;
        this.created = created;
        this.closed = closed;
    }

    public Project() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getClosed() {
        return closed;
    }

    public void setClosed(Date closed) {
        this.closed = closed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return id == project.id &&
                Objects.equals(code, project.code) &&
                Objects.equals(owner, project.owner) &&
                Objects.equals(description, project.description) &&
                Objects.equals(created, project.created) &&
                Objects.equals(closed, project.closed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, owner, description, created, closed);
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", owner=" + owner +
                ", description='" + description + '\'' +
                ", created=" + created +
                ", closed=" + closed +
                '}';
    }
}
