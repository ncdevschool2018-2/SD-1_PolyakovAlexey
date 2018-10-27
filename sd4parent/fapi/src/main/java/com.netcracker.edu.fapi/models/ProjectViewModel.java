package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProjectViewModel {
    private long projectId;
    private String projectCode;
    private long ownerId;
    private String description;
    private Date createdDate;
    private Date closedDate;

    public ProjectViewModel(long projectId, String projectCode, long ownerId, String description, Date createdDate, Date closedDate) {
        this.projectId = projectId;
        this.projectCode = projectCode;
        this.ownerId = ownerId;
        this.description = description;
        this.createdDate = createdDate;
        this.closedDate = closedDate;
    }

    public ProjectViewModel() {

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


}
