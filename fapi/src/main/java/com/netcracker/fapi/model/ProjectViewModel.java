package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectViewModel {
    private Long id;
    private String code;
    private String description;
    private UserViewModel owner;
    private Date created;
    private Date updated;
    private Date closed;

    public ProjectViewModel() {

    }

    public ProjectViewModel(Long id, String code, String description, UserViewModel owner, Date created, Date updated, Date closed) {
        this.id = id;
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

    public UserViewModel getOwner() {
        return owner;
    }

    public void setOwner(UserViewModel owner) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectViewModel that = (ProjectViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(code, that.code) &&
                Objects.equals(description, that.description) &&
                Objects.equals(owner, that.owner) &&
                Objects.equals(created, that.created) &&
                Objects.equals(updated, that.updated) &&
                Objects.equals(closed, that.closed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, description, owner, created, updated, closed);
    }

    @Override
    public String toString() {
        return "ProjectViewModel{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", owner=" + owner +
                ", created=" + created +
                ", updated=" + updated +
                ", closed=" + closed +
                '}';
    }
}
