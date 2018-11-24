package com.netcracker.backend.service;

import com.netcracker.backend.entity.Attachment;

public interface AttachmentService {
    Attachment save(Attachment attachment);

    Iterable<Attachment> findAll();

    void deleteById(Long id);
}
