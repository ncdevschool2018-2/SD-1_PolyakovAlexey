package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectViewModel {
    private long id;
    private String code;
    private UserViewModel owner;
    private String description;
    private Date created;
    private Date closed;

    public ProjectViewModel(long id, String code, UserViewModel owner, String description, Date created, Date closed) {
        this.id = id;
        this.code = code;
        this.owner = owner;
        this.description = description;
        this.created = created;
        this.closed = closed;
    }

    public ProjectViewModel() {

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

    public UserViewModel getOwner() {
        return owner;
    }

    public void setOwner(UserViewModel owner) {
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
        ProjectViewModel that = (ProjectViewModel) o;
        return id == that.id &&
                Objects.equals(code, that.code) &&
                Objects.equals(owner, that.owner) &&
                Objects.equals(description, that.description) &&
                Objects.equals(created, that.created) &&
                Objects.equals(closed, that.closed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, owner, description, created, closed);
    }

    @Override
    public String toString() {
        return "ProjectViewModel{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", owner=" + owner +
                ", description='" + description + '\'' +
                ", created=" + created +
                ", closed=" + closed +
                '}';
    }
}
