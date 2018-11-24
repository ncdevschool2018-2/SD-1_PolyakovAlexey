package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskViewModel {
    private Long id;
    private String code;
    private String description;
    private StatusViewModel status;
    private PriorityViewModel priority;
    private ProjectViewModel project;
    private UserViewModel reporter;
    private UserViewModel assignee;
    private Date created;
    private Date updated;
    private Date dueDate;
    private Date closed;
    private String estimation;

    private List<TaskViewModel> parents;
    private List<TaskViewModel> related;

    public TaskViewModel() {

    }

    public TaskViewModel(Long id, String code, String description, StatusViewModel status, PriorityViewModel priority, ProjectViewModel project, UserViewModel reporter, UserViewModel assignee, Date created, Date updated, Date dueDate, Date closed, String estimation, List<TaskViewModel> parents, List<TaskViewModel> related) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.project = project;
        this.reporter = reporter;
        this.assignee = assignee;
        this.created = created;
        this.updated = updated;
        this.dueDate = dueDate;
        this.closed = closed;
        this.estimation = estimation;
        this.parents = parents;
        this.related = related;
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

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getClosed() {
        return closed;
    }

    public void setClosed(Date closed) {
        this.closed = closed;
    }

    public String getEstimation() {
        return estimation;
    }

    public void setEstimation(String estimation) {
        this.estimation = estimation;
    }

    public List<TaskViewModel> getParents() {
        return parents;
    }

    public void setParents(List<TaskViewModel> parents) {
        this.parents = parents;
    }

    public List<TaskViewModel> getRelated() {
        return related;
    }

    public void setRelated(List<TaskViewModel> related) {
        this.related = related;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaskViewModel that = (TaskViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(code, that.code) &&
                Objects.equals(description, that.description) &&
                Objects.equals(status, that.status) &&
                Objects.equals(priority, that.priority) &&
                Objects.equals(project, that.project) &&
                Objects.equals(reporter, that.reporter) &&
                Objects.equals(assignee, that.assignee) &&
                Objects.equals(created, that.created) &&
                Objects.equals(updated, that.updated) &&
                Objects.equals(dueDate, that.dueDate) &&
                Objects.equals(closed, that.closed) &&
                Objects.equals(estimation, that.estimation) &&
                Objects.equals(parents, that.parents) &&
                Objects.equals(related, that.related);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, description, status, priority, project, reporter, assignee, created, updated, dueDate, closed, estimation, parents, related);
    }

    @Override
    public String toString() {
        return "TaskViewModel{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", priority=" + priority +
                ", project=" + project +
                ", reporter=" + reporter +
                ", assignee=" + assignee +
                ", created=" + created +
                ", updated=" + updated +
                ", dueDate=" + dueDate +
                ", closed=" + closed +
                ", estimation='" + estimation + '\'' +
                ", parents=" + parents +
                ", related=" + related +
                '}';
    }
}
