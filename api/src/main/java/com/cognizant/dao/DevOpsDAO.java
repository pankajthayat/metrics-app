package com.cognizant.dao;

import com.cognizant.model.DevOps;

/**
 * 
 * @author 674228
 *
 */

public interface DevOpsDAO {
	

	boolean insertDevOpsRecord(String qry, DevOps model, String userName);
	
	boolean updateDevOpsRecord(String qry, DevOps model);

	boolean deleteDevOpsRecord(String qry, DevOps model);
}
