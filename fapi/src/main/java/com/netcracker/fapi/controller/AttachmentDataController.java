package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.AttachmentViewModel;
import com.netcracker.fapi.service.AttachmentDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attachment")
public class AttachmentDataController {

    private AttachmentDataService attachmentDataService;

    @Autowired
    public AttachmentDataController(AttachmentDataService attachmentDataService) {
        this.attachmentDataService = attachmentDataService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<AttachmentViewModel> save(@RequestBody AttachmentViewModel attachment) {
        if (attachment != null) {
            return ResponseEntity.ok(attachmentDataService.save(attachment));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<AttachmentViewModel>> findAll() {
        return ResponseEntity.ok(attachmentDataService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable(name = "id") Long id) {
        attachmentDataService.deleteById(id);
    }
}
