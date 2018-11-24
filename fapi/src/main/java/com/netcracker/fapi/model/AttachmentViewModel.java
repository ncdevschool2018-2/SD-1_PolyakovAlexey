package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AttachmentViewModel {
    private Long id;
    private String name;
    private byte[] fileData;
    private TaskViewModel task;

    public AttachmentViewModel() {

    }

    public AttachmentViewModel(Long id, String name, byte[] fileData, TaskViewModel task) {
        this.id = id;
        this.name = name;
        this.fileData = fileData;
        this.task = task;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }

    public TaskViewModel getTask() {
        return task;
    }

    public void setTask(TaskViewModel task) {
        this.task = task;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AttachmentViewModel that = (AttachmentViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name) &&
                Arrays.equals(fileData, that.fileData) &&
                Objects.equals(task, that.task);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, name, task);
        result = 31 * result + Arrays.hashCode(fileData);
        return result;
    }

    @Override
    public String toString() {
        return "AttachmentViewModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", fileData=" + Arrays.toString(fileData) +
                ", task=" + task +
                '}';
    }
}
