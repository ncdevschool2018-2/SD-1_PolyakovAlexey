package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CommentViewModel {
    private Long id;
    private String text;
    private UserViewModel user;
    private TaskViewModel task;
    private Date created;

    public CommentViewModel() {

    }

    public CommentViewModel(Long id, String text, UserViewModel user, TaskViewModel task, Date created) {
        this.id = id;
        this.text = text;
        this.user = user;
        this.task = task;
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public UserViewModel getUser() {
        return user;
    }

    public void setUser(UserViewModel user) {
        this.user = user;
    }

    public TaskViewModel getTask() {
        return task;
    }

    public void setTask(TaskViewModel task) {
        this.task = task;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommentViewModel that = (CommentViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(text, that.text) &&
                Objects.equals(user, that.user) &&
                Objects.equals(task, that.task) &&
                Objects.equals(created, that.created);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, text, user, task, created);
    }

    @Override
    public String toString() {
        return "CommentViewModel{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", user=" + user +
                ", task=" + task +
                ", created=" + created +
                '}';
    }
}
