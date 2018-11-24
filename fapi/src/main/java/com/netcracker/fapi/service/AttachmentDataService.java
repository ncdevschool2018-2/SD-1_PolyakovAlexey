package com.netcracker.fapi.service;

import com.netcracker.fapi.model.AttachmentViewModel;

import java.util.List;

public interface AttachmentDataService {
    AttachmentViewModel save(AttachmentViewModel attachment);

    List<AttachmentViewModel> findAll();

    void deleteById(Long id);
}
