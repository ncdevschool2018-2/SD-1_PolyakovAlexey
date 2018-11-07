package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.netcracker.edu.fapi.models.enums.PriorityViewModel;
import com.netcracker.edu.fapi.models.enums.StatusViewModel;

import java.util.Date;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskViewModel {
    private long id;
    private String code;
    private ProjectViewModel project;
    private UserViewModel reporter;
    private UserViewModel assignee;
    private StatusViewModel status;
    private PriorityViewModel priority;
    private String description;
    private Date created;
    private Date dueDate;
    private Date updated;
    private String estimation;

    {
        status = StatusViewModel.OPEN;
        created = new Date();
        updated = new Date();
    }

    public TaskViewModel(long id, String code, ProjectViewModel project, UserViewModel reporter, UserViewModel assignee, StatusViewModel status, PriorityViewModel priority, String description, Date created, Date dueDate, Date updated, String estimation) {
        this.id = id;
        this.code = code;
        this.project = project;
        this.reporter = reporter;
        this.assignee = assignee;
        this.status = status;
        this.priority = priority;
        this.description = description;
        this.created = created;
        this.dueDate = dueDate;
        this.updated = updated;
        this.estimation = estimation;
    }

    public TaskViewModel() {

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

    public ProjectViewModel getProject() {
        return project;
    }

    public void setProject(ProjectViewModel project) {
        this.project = project;
    }

    public UserViewModel getReporter() {
        return reporter;
    }

    public void setReporter(UserViewModel reporter) {
        this.reporter = reporter;
    }

    public UserViewModel getAssignee() {
        return assignee;
    }

    public void setAssignee(UserViewModel assignee) {
        this.assignee = assignee;
    }

    public StatusViewModel getStatus() {
        return status;
    }

    public void setStatus(StatusViewModel status) {
        this.status = status;
    }

    public PriorityViewModel getPriority() {
        return priority;
    }

    public void setPriority(PriorityViewModel priority) {
        this.priority = priority;
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

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
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
        TaskViewModel that = (TaskViewModel) o;
        return id == that.id &&
                Objects.equals(code, that.code) &&
                Objects.equals(project, that.project) &&
                Objects.equals(reporter, that.reporter) &&
                Objects.equals(assignee, that.assignee) &&
                status == that.status &&
                priority == that.priority &&
                Objects.equals(description, that.description) &&
                Objects.equals(created, that.created) &&
                Objects.equals(dueDate, that.dueDate) &&
                Objects.equals(updated, that.updated) &&
                Objects.equals(estimation, that.estimation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, project, reporter, assignee, status, priority, description, created, dueDate, updated, estimation);
    }

    @Override
    public String toString() {
        return "TaskViewModel{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", project=" + project +
                ", reporter=" + reporter +
                ", assignee=" + assignee +
                ", status=" + status +
                ", priority=" + priority +
                ", description='" + description + '\'' +
                ", created=" + created +
                ", dueDate='" + dueDate + '\'' +
                ", updated=" + updated +
                ", estimation='" + estimation + '\'' +
                '}';
    }
}
