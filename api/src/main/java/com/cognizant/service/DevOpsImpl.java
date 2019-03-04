package com.cognizant.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.DevOpsDAO;
import com.cognizant.model.DevOps;
import com.cognizant.queryinterface.DevOpsQueries;
import com.cognizant.util.StringConstants;

@Service
public class DevOpsImpl extends CommonImpl implements DevOpsService {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(DevOpsImpl.class);

	@Autowired
	private DevOpsDAO dao;
	

	@Override
	public String addDevOpsRecord(DevOps model, String userName) {

		String returnMsg = StringConstants.SAVED;
		try {
			List<Map<String, String>> dopsData = model.getDops();
			for (int i = 0; i < dopsData.size(); i++) 
			{
				Map<String, String> temp = dopsData.get(i);
				DevOps tempModel = new DevOps();
				tempModel.setComments(temp.get("comments") != null? temp.get("comments"): StringConstants.EMPTY);
				tempModel.setPostProdDefectsLow(temp.get("postProdDefectsLow") != null? temp.get("postProdDefectsLow"): StringConstants.EMPTY);
				tempModel.setPostProdDefectsMedium(temp.get("postProdDefectsMedium") != null? temp.get("postProdDefectsMedium"): StringConstants.EMPTY);
				tempModel.setOpenDefects(temp.get("openDefects") != null? temp.get("openDefects"): StringConstants.EMPTY);
				tempModel.setPeriodMonth(temp.get("periodMonth") != null? temp.get("periodMonth"): StringConstants.EMPTY);
				tempModel.setPeriodYear(temp.get("periodYear") != null? temp.get("periodYear"): StringConstants.EMPTY);
				tempModel.setPostProdDefectsCritical(temp.get("postProdDefectsCritical") != null? temp.get("postProdDefectsCritical"): StringConstants.EMPTY);
				tempModel.setPostProdDefectsHigh(temp.get("postProdDefectsHigh") != null? temp.get("postProdDefectsHigh"): StringConstants.EMPTY);
				tempModel.setReleaseDate(temp.get("releaseDate") != null? temp.get("releaseDate"): StringConstants.EMPTY);
				tempModel.setReleaseDesc(temp.get("releaseDesc") != null? temp.get("releaseDesc"): StringConstants.EMPTY);
				tempModel.setReleaseName(temp.get("releaseName") != null? temp.get("releaseName"): StringConstants.EMPTY);
				tempModel.setReleaseType(temp.get("releaseType") != null? temp.get("releaseType"): StringConstants.EMPTY);
				tempModel.setRollbacks(temp.get("rollbacks") != null? temp.get("rollbacks"): StringConstants.EMPTY);
				tempModel.setSuccessfulDeployments(temp.get("successfulDeployments") != null? temp.get("successfulDeployments"): StringConstants.EMPTY);
				tempModel.setTotalDefects(temp.get("totalDefects") != null? temp.get("totalDefects"): StringConstants.EMPTY);
				tempModel.setTotalDeploymentsAttempted(temp.get("totalDeploymentsAttempted") != null? temp.get("totalDeploymentsAttempted"): StringConstants.EMPTY);
				tempModel.setPodId(model.getPodId());
				tempModel.setPodName(model.getPodName());
				
				boolean isInserted = dao.insertDevOpsRecord(DevOpsQueries.ADD_RECORD, tempModel, userName);
				if (!isInserted)
					returnMsg = StringConstants.ERROR;
			}
		} 
		catch (Exception ex) {
			LOGGER.error("Error in creating DevOps metric type record.",ex.getMessage());
		}
		return returnMsg;
	}

	@Override
	public String updateDevOpsRecord(DevOps model) {

		String returnMsg = StringConstants.ERROR;
		LOGGER.info("===== inside update devops service====");
		try {
			boolean isUpdated = dao
					.updateDevOpsRecord(DevOpsQueries.UPDATE_RECORD, model);
			returnMsg = isUpdated ? StringConstants.UPDATED : returnMsg;
		} catch (Exception ex) {
			LOGGER.error("Error in updating DevOps metric type record.",ex.getMessage());
		}

		return returnMsg;
	}

	@Override
	public String deleteDevOpsRecord(DevOps model) {

		String returnMsg = StringConstants.ERROR;
		try {
			boolean isDeleted = dao
					.deleteDevOpsRecord(DevOpsQueries.DELETE_RECORD, model);
			returnMsg = isDeleted ? StringConstants.DELETED : returnMsg;
		} catch (Exception ex) {
			LOGGER.error("Error in deleting DevOps metric type record.",ex.getMessage());
		}

		return returnMsg;
	}

}
