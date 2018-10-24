package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskViewModel {

    private int task_id;
    private String projectCode;
    private String summary;
    private String priority;
    private String estimation;
    private String assignee;

    public TaskViewModel() {

    }

    public TaskViewModel(int task_id, String projectCode, String summary, String priority, String estimation, String assignee) {
        this.task_id = task_id;
        this.projectCode = projectCode;
        this.summary = summary;
        this.priority = priority;
        this.estimation = estimation;
        this.assignee = assignee;
    }


    public int getTask_id() {
        return task_id;
    }

    public void setTask_id(int task_id) {
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
}
