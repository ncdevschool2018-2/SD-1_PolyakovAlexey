package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskViewModel {
    private long taskId;
    private String ticketCode;
    private long taskProjectId;
    private long userReporterId;
    private long userAssigneeId;
    private long statusId;
    private long priorityId;
    private String description;
    private Date createdDate;
    private Date dueDate;
    private Date updatedDate;
    private String estimation;

    public TaskViewModel(long taskId, String ticketCode, long taskProjectId, long userReporterId, long userAssigneeId, long statusId, long priorityId, String description, Date createdDate, Date dueDate, Date updatedDate, String estimation) {
        this.taskId = taskId;
        this.ticketCode = ticketCode;
        this.taskProjectId = taskProjectId;
        this.userReporterId = userReporterId;
        this.userAssigneeId = userAssigneeId;
        this.statusId = statusId;
        this.priorityId = priorityId;
        this.description = description;
        this.createdDate = createdDate;
        this.dueDate = dueDate;
        this.updatedDate = updatedDate;
        this.estimation = estimation;
    }

    public TaskViewModel() {

    }

    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    public String getTicketCode() {
        return ticketCode;
    }

    public void setTicketCode(String ticketCode) {
        this.ticketCode = ticketCode;
    }

    public long getTaskProjectId() {
        return taskProjectId;
    }

    public void setTaskProjectId(long taskProjectId) {
        this.taskProjectId = taskProjectId;
    }

    public long getUserReporterId() {
        return userReporterId;
    }

    public void setUserReporterId(long userReporterId) {
        this.userReporterId = userReporterId;
    }

    public long getUserAssigneeId() {
        return userAssigneeId;
    }

    public void setUserAssigneeId(long userAssigneeId) {
        this.userAssigneeId = userAssigneeId;
    }

    public long getStatusId() {
        return statusId;
    }

    public void setStatusId(long statusId) {
        this.statusId = statusId;
    }

    public long getPriorityId() {
        return priorityId;
    }

    public void setPriorityId(long priorityId) {
        this.priorityId = priorityId;
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

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getEstimation() {
        return estimation;
    }

    public void setEstimation(String estimation) {
        this.estimation = estimation;
    }
}
