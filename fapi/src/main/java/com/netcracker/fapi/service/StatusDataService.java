package com.netcracker.fapi.service;

import com.netcracker.fapi.model.StatusViewModel;

public interface StatusDataService {
    StatusViewModel findByName(String name);
}
