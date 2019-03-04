package com.cognizant.service;

import com.cognizant.model.DevOps;

/**
 * 
 * @author 674228
 *
 */

public interface DevOpsService {
	
	String addDevOpsRecord(DevOps model, String userName);
	
	String updateDevOpsRecord(DevOps model);
	
	String deleteDevOpsRecord(DevOps model);
}
