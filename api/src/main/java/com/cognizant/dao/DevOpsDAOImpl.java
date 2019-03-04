package com.cognizant.dao;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.cognizant.model.DevOps;
import com.cognizant.service.CommonImpl;
import com.cognizant.service.DevOpsImpl;

import com.cognizant.dao.DevOpsDAO;
import com.cognizant.queryinterface.DevOpsQueries;

/**
 * 
 * @author 674228
 *
 */

@Component
public class DevOpsDAOImpl extends CommonImpl implements DevOpsDAO {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(DevOpsImpl.class);
	

	@Override
	public boolean insertDevOpsRecord(String qry, DevOps model, String userName) {
		
		boolean isInserted = false;
		try {
			isInserted = insertUpdate(DevOpsQueries.ADD_RECORD,
					model.getPodId(), model.getPodName(),model.getReleaseName(),
					model.getReleaseDate(),model.getReleaseDesc(),
					model.getReleaseType(),
					model.getPeriodMonth(),model.getPeriodYear(),
					model.getComments(),model.getRollbacks(),model.getTotalDefects(),
					model.getOpenDefects(),model.getPostProdDefectsMedium(),
					model.getPostProdDefectsLow(),model.getPostProdDefectsHigh(),
					model.getPostProdDefectsCritical(),model.getSuccessfulDeployments(),
					model.getTotalDeploymentsAttempted(),
					userName);
		} catch (Exception ex) {
			LOGGER.error("Error in creating DevOps metric type record.",ex.getMessage());
		}
		return isInserted;
	}


	@Override
	public boolean updateDevOpsRecord(String qry, DevOps model) {
		boolean isUpdated = false;
		try
		{
			LOGGER.info("===== inside update devops doa file====");
			isUpdated = insertUpdate(DevOpsQueries.UPDATE_RECORD,

				    model.getPodName(),
					model.getReleaseName(),
					model.getReleaseDate(),model.getReleaseDesc(),
					model.getReleaseType(),
					model.getPeriodMonth(),model.getPeriodYear(),
					model.getComments(),model.getRollbacks(),model.getTotalDefects(),
					model.getOpenDefects(),model.getPostProdDefectsMedium(),
					model.getPostProdDefectsLow(),model.getPostProdDefectsHigh(),
					model.getPostProdDefectsCritical(),model.getSuccessfulDeployments(),
					model.getTotalDeploymentsAttempted(),
					model.getId());
		}
		catch (Exception e) {
			LOGGER.error("Error in updating DevOps metric type record.",e.getMessage());
		}
		return isUpdated;
	}


	@Override
	public boolean deleteDevOpsRecord(String qry, DevOps model) {
		boolean isDeleted =false;
		try
		{
			isDeleted=insertUpdate(DevOpsQueries.DELETE_RECORD, model.getId());
		}
		catch (Exception e) {
			LOGGER.error("Error in deleting DevOps metric type record.",e.getMessage());
		}
		return isDeleted;
	}


}
