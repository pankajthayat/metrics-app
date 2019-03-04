package com.cognizant.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.EngineeringDAO;
import com.cognizant.model.Engineering;
import com.cognizant.queryinterface.EngineeringQueries;
import com.cognizant.util.NumericConstants;
import com.cognizant.util.StringConstants;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * @author 739243
 *
 */
@Service
public class EngineeringImpl extends CommonImpl implements EngineeringService {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(EngineeringImpl.class);

	@Autowired
	private EngineeringDAO dao;

	@Override
	public String loadPod() {

		JsonArray json = new JsonArray();
		try {
			List<List<String>> result = dao.loadPod(
					EngineeringQueries.LOAD_PROD_DETAILS,
					StringConstants.PROJECT);
			result.forEach(temp -> {
				JsonObject jsonObj = new JsonObject();
				jsonObj.addProperty(StringConstants.POD_ID,
						temp.get(NumericConstants.NUM_0));
				jsonObj.addProperty(StringConstants.POD_NAME,
						temp.get(NumericConstants.NUM_1));
				json.add(jsonObj);
			});
		} catch (Exception ex) {
			LOGGER.error("Error in getting pod details.",ex.getMessage());
		}

		return json.toString();
	}

	@Override
	public String addRecord(Engineering model, String userName) {

		String returnMsg = StringConstants.ERROR;
		try {
			List<Map<String, String>> enggData = model.getEngg();
			for (int i = 0; i < enggData.size(); i++) 
			{
				Map<String, String> temp = enggData.get(i);
				Engineering tempModel=new Engineering();
				tempModel.setcodeQualityCyclometric(temp.get("codeQualityCyclometric") != null? temp.get("codeQualityCyclometric"): StringConstants.EMPTY);
				tempModel.setTechnicalCode(temp.get("codeQualityTechnical") != null? temp.get("codeQualityTechnical"): StringConstants.EMPTY);
				tempModel.setMaintainabilityQuality(temp.get("codeQualityMaintainability") != null? temp.get("codeQualityMaintainability"): StringConstants.EMPTY);
				tempModel.setSecurityDefects(temp.get("securityDefects") != null? temp.get("securityDefects"): StringConstants.EMPTY);
				tempModel.setComments(temp.get("comments") != null? temp.get("comments"): StringConstants.EMPTY);
				tempModel.setPodId(model.getPodId());
				tempModel.setPodName(model.getPodName());
				tempModel.setPeriodMonth(temp.get("periodMonth") != null? temp.get("periodMonth"): StringConstants.EMPTY);
				tempModel.setPeriodYear(temp.get("periodYear") != null? temp.get("periodYear"): StringConstants.EMPTY);
				boolean isInserted = dao.insertRecord(EngineeringQueries.ADD_RECORD, tempModel, userName);
				if (!isInserted)
					returnMsg = StringConstants.ERROR;
			}
		} catch (Exception ex) {
			LOGGER.error("Error in creating Enginerring metric type record.",ex.getMessage());
		}

		return returnMsg;
	}

	@Override
	public String updateRecord(Engineering model, String userName) {

		String returnMsg = StringConstants.ERROR;
		try {
			boolean isUpdated = dao.updateRecord(
					EngineeringQueries.UPDATE_RECORD, model, userName);
			returnMsg = isUpdated ? StringConstants.UPDATED : returnMsg;
		} catch (Exception ex) {
			LOGGER.error("Error in updating Enginerring metric type record.",ex.getMessage());
		}

		return returnMsg;
	}

	@Override
	public String deleteRecord(Engineering model) {

		String returnMsg = StringConstants.ERROR;
		try {
			boolean isDeleted = dao
					.deleteRecord(EngineeringQueries.DELETE_RECORD, model);
			returnMsg = isDeleted ? StringConstants.DELETED : returnMsg;
		} catch (Exception ex) {
			LOGGER.error("Error in updating Enginerring metric type record.",ex.getMessage());
		}
		return returnMsg;
	}

}
