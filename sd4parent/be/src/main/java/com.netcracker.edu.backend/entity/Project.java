package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long projectId;
    private String projectCode;
    private long ownerId;
    private String description;
    private Date createdDate;
    private Date closedDate;

    public Project(String projectCode, long ownerId, String description, Date createdDate, Date closedDate) {
        this.projectCode = projectCode;
        this.ownerId = ownerId;
        this.description = description;
        this.createdDate = createdDate;
        this.closedDate = closedDate;
    }

    public Project() {

    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(long ownerId) {
        this.ownerId = ownerId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return projectId == project.projectId &&
                ownerId == project.ownerId &&
                Objects.equals(projectCode, project.projectCode) &&
                Objects.equals(description, project.description) &&
                Objects.equals(createdDate, project.createdDate) &&
                Objects.equals(closedDate, project.closedDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(projectId, projectCode, ownerId, description, createdDate, closedDate);
    }

    @Override
    public String toString() {
        return "Project{" +
                "projectId=" + projectId +
                ", projectCode='" + projectCode + '\'' +
                ", ownerId=" + ownerId +
                ", description='" + description + '\'' +
                ", createdDate=" + createdDate +
                ", closedDate=" + closedDate +
                '}';
    }
}
