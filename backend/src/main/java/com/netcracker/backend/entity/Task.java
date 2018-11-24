package com.netcracker.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code;
    private String description;
    @ManyToOne
    private Status status;
    @ManyToOne
    private Priority priority;
    @ManyToOne
    private Project project;
    @ManyToOne
    private User reporter;
    @ManyToOne
    private User assignee;
    private Date created;
    private Date updated;
    @Column(name = "due_date")
    private Date dueDate;
    private Date closed;
    private String estimation;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "task_links",
            joinColumns = {@JoinColumn(name = "parent_id")},
            inverseJoinColumns = {@JoinColumn(name = "related_id")}
    )

    private List<Task> parents;
    @JsonIgnore
    @ManyToMany(mappedBy = "parents")
    private List<Task> related;

    public Task() {

    }

    public Task(Long id, String code, String description, Status status, Priority priority, Project project, User reporter, User assignee, Date created, Date updated, Date dueDate, Date closed, String estimation) {
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

    public List<Task> getParents() {
        return parents;
    }

    public void setParents(List<Task> parents) {
        this.parents = parents;
    }

    public List<Task> getRelated() {
        return related;
    }

    public void setRelated(List<Task> related) {
        this.related = related;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return Objects.equals(id, task.id) &&
                Objects.equals(code, task.code) &&
                Objects.equals(description, task.description) &&
                Objects.equals(status, task.status) &&
                Objects.equals(priority, task.priority) &&
                Objects.equals(project, task.project) &&
                Objects.equals(reporter, task.reporter) &&
                Objects.equals(assignee, task.assignee) &&
                Objects.equals(created, task.created) &&
                Objects.equals(updated, task.updated) &&
                Objects.equals(dueDate, task.dueDate) &&
                Objects.equals(closed, task.closed) &&
                Objects.equals(estimation, task.estimation) &&
                Objects.equals(parents, task.parents) &&
                Objects.equals(related, task.related);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, code, description, status, priority, project, reporter, assignee, created, updated, dueDate, closed, estimation, parents, related);
    }

    @Override
    public String toString() {
        return "Task{" +
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
