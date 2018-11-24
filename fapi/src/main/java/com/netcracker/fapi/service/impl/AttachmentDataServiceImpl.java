package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.AttachmentViewModel;
import com.netcracker.fapi.service.AttachmentDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("attachmentDataService")
public class AttachmentDataServiceImpl implements AttachmentDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public AttachmentViewModel save(AttachmentViewModel attachment) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/attachments", attachment, AttachmentViewModel.class).getBody();
    }

    @Override
    public List<AttachmentViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        AttachmentViewModel[] attachmentViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/attachments", AttachmentViewModel[].class);
        return attachmentViewModelResponse == null ? Collections.emptyList() : Arrays.asList(attachmentViewModelResponse);
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/attachments/" + id);
    }
}
