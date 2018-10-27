package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Task(String ticketCode, long taskProjectId, long userReporterId, long userAssigneeId, long statusId, long priorityId, String description, Date createdDate, Date dueDate, Date updatedDate, String estimation) {
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

    public Task() {

    }

    public long getTaskId() {
        return taskId;
    }

    public void setTaskId(long taskId) {
        this.taskId = taskId;
    }

    public String getTickedCode() {
        return ticketCode;
    }

    public void setTickedCode(String ticketCode) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return taskId == task.taskId &&
                taskProjectId == task.taskProjectId &&
                userReporterId == task.userReporterId &&
                userAssigneeId == task.userAssigneeId &&
                statusId == task.statusId &&
                priorityId == task.priorityId &&
                Objects.equals(ticketCode, task.ticketCode) &&
                Objects.equals(description, task.description) &&
                Objects.equals(createdDate, task.createdDate) &&
                Objects.equals(dueDate, task.dueDate) &&
                Objects.equals(updatedDate, task.updatedDate) &&
                Objects.equals(estimation, task.estimation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, ticketCode, taskProjectId, userReporterId, userAssigneeId, statusId, priorityId, description, createdDate, dueDate, updatedDate, estimation);
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId=" + taskId +
                ", ticketCode='" + ticketCode + '\'' +
                ", taskProjectId=" + taskProjectId +
                ", userReporterId=" + userReporterId +
                ", userAssigneeId=" + userAssigneeId +
                ", statusId=" + statusId +
                ", priorityId=" + priorityId +
                ", description='" + description + '\'' +
                ", createdDate=" + createdDate +
                ", dueDate=" + dueDate +
                ", updatedDate=" + updatedDate +
                ", estimation='" + estimation + '\'' +
                '}';
    }
}
