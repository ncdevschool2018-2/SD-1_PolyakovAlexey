package com.netcracker.fapi.service.impl;

import com.netcracker.fapi.model.CommentViewModel;
import com.netcracker.fapi.service.CommentDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service("commentDataService")
public class CommentDataServiceImpl implements CommentDataService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public CommentViewModel save(CommentViewModel comment) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/comments", comment, CommentViewModel.class).getBody();
    }

    @Override
    public List<CommentViewModel> findAll() {
        RestTemplate restTemplate = new RestTemplate();
        CommentViewModel[] commentViewModelResponse = restTemplate.getForObject(backendServerUrl + "/api/comments", CommentViewModel[].class);
        return commentViewModelResponse == null ? Collections.emptyList() : Arrays.asList(commentViewModelResponse);
    }

    @Override
    public CommentViewModel findById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/comments/" + id, CommentViewModel.class);
    }

    @Override
    public void deleteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/comments/" + id);
    }
}
