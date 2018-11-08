package com.netcracker.edu.backend.entity;

import com.netcracker.edu.backend.entity.enums.Priority;
import com.netcracker.edu.backend.entity.enums.Status;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String code;
    @ManyToOne
    private Project project;
    @ManyToOne
    private User reporter;
    @ManyToOne
    private User assignee;
    @Enumerated(EnumType.STRING)
    private Status status;
    @Enumerated(EnumType.STRING)
    private Priority priority;
    private String description;
    private Date created;
    private Date dueDate;
    private Date updated;
    private String estimation;

    public Task(String code, Project project, User reporter, User assignee, Status status, Priority priority, String description, Date created, Date dueDate, Date updated, String estimation) {
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

    public Task() {

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

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public User getReporter() {
        return reporter;
    }

    public void setReporter(User reporter) {
        this.reporter = reporter;
    }

    public User getAssignee() {
        return assignee;
    }

    public void setAssignee(User assignee) {
        this.assignee = assignee;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
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
        Task task = (Task) o;
        return id == task.id &&
                Objects.equals(code, task.code) &&
                Objects.equals(project, task.project) &&
                Objects.equals(reporter, task.reporter) &&
                Objects.equals(assignee, task.assignee) &&
                status == task.status &&
                priority == task.priority &&
                Objects.equals(description, task.description) &&
                Objects.equals(created, task.created) &&
                Objects.equals(dueDate, task.dueDate) &&
                Objects.equals(updated, task.updated) &&
                Objects.equals(estimation, task.estimation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, project, reporter, assignee, status, priority, description, created, dueDate, updated, estimation);
    }

    @Override
    public String toString() {
        return "Task{" +
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
