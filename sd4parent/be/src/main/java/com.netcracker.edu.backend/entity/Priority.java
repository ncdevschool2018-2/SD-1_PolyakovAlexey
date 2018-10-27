package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "priorities")
public class Priority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long priorityId;
    private String priorityName;

    public Priority(String priorityName) {
        this.priorityName = priorityName;
    }

    public Priority() {

    }

    public long getPriorityId() {
        return priorityId;
    }

    public void setPriorityId(long priorityId) {
        this.priorityId = priorityId;
    }

    public String getPriorityName() {
        return priorityName;
    }

    public void setPriorityName(String priorityName) {
        this.priorityName = priorityName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Priority priority = (Priority) o;
        return priorityId == priority.priorityId &&
                Objects.equals(priorityName, priority.priorityName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(priorityId, priorityName);
    }

    @Override
    public String toString() {
        return "Priority{" +
                "priorityId=" + priorityId +
                ", priorityName='" + priorityName + '\'' +
                '}';
    }
}
