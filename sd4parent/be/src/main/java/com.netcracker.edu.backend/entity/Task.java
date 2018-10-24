package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "test_tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long task_id;
    private String projectCode;
    private String summary;
    private String priority;
    private String estimation;
    private String assignee;

    public Task(String projectCode, String summary, String priority, String estimation, String assignee) {
        this.projectCode = projectCode;
        this.summary = summary;
        this.priority = priority;
        this.estimation = estimation;
        this.assignee = assignee;
    }

    public Task() {

    }

    public long getTask_id() {
        return task_id;
    }

    public void setTask_id(long task_id) {
        this.task_id = task_id;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getEstimation() {
        return estimation;
    }

    public void setEstimation(String estimation) {
        this.estimation = estimation;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return task_id == task.task_id &&
                Objects.equals(projectCode, task.projectCode) &&
                Objects.equals(summary, task.summary) &&
                Objects.equals(priority, task.priority) &&
                Objects.equals(estimation, task.estimation) &&
                Objects.equals(assignee, task.assignee);
    }

    @Override
    public int hashCode() {
        return Objects.hash(task_id, projectCode, summary, priority,estimation, assignee);
    }

    @Override
    public String toString() {
        return "Task{" +
                "task_id=" + task_id +
                ", projectCode='" + projectCode + '\'' +
                ", summary='" + summary + '\'' +
                ", priority='" + priority + '\'' +
                ", estimation='" + estimation + '\'' +
                ", assignee='" + assignee + '\'' +
                '}';
    }
}
