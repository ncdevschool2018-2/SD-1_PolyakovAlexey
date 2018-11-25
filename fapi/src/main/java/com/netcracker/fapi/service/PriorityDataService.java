package com.netcracker.fapi.service;

import com.netcracker.fapi.model.PriorityViewModel;

import java.util.List;

public interface PriorityDataService {
    List<PriorityViewModel> findAll();
}
