package com.netcracker.backend.service.impl;

import com.netcracker.backend.entity.Attachment;
import com.netcracker.backend.repository.AttachmentRepository;
import com.netcracker.backend.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("attachmentService")
public class AttachmentServiceImpl implements AttachmentService {

    private AttachmentRepository repository;

    @Autowired
    public AttachmentServiceImpl(AttachmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Attachment save(Attachment attachment) {
        return repository.save(attachment);
    }

    @Override
    public Iterable<Attachment> findAll() {
        return repository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
