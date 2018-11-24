package com.netcracker.backend.controller;

import com.netcracker.backend.entity.Attachment;
import com.netcracker.backend.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attachments")
public class AttachmentController {

    private AttachmentService attachmentService;

    @Autowired
    public AttachmentController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Attachment save(@RequestBody Attachment attachment) {
        return attachmentService.save(attachment);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Attachment> findAll() {
        return attachmentService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteById(@PathVariable(name = "id") Long id) {
        attachmentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
