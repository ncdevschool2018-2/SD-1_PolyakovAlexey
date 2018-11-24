package com.netcracker.fapi.service;

import com.netcracker.fapi.model.CommentViewModel;

import java.util.List;

public interface CommentDataService {
    CommentViewModel save(CommentViewModel comment);

    List<CommentViewModel> findAll();

    CommentViewModel findById(Long id);

    void deleteById(Long id);
}
