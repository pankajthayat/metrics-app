package com.cognizant.dao;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Component;

import com.cognizant.model.Engineering;
import com.cognizant.queryinterface.EngineeringQueries;
import com.cognizant.service.CommonImpl;
import com.cognizant.service.EngineeringImpl;

/**
 * @author 739243
 *
 */
@Component
public class EngineeringDAOImpl extends CommonImpl implements EngineeringDAO {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(EngineeringImpl.class);

	@Override
	public List<List<String>> loadPod(String qry, String project) {

		List<List<String>> result = new ArrayList<>();
		try {
			result = getArrayListResultSet(qry, project);
		} catch (Exception ex) {
			LOGGER.error("Error in getting pod details.",ex.getMessage());
		}

		return result;
	}

	@Override
	public boolean insertRecord(String qry, Engineering model,
			String userName) {

		boolean isInserted = false;
		try {
			isInserted = insertUpdate(EngineeringQueries.ADD_RECORD,
					model.getPodId(), model.getPodName(),model.getPeriodMonth(),model.getPeriodYear(),
					model.getcodeQualityCyclometric(),model.getTechnicalCode(),
					model.getMaintainabilityQuality(),model.getSecurityDefects(),model.getComments(), userName);
		} catch (Exception ex) {
			LOGGER.error("Error in creating Enginerring metric type record.",ex.getMessage());
		}

		return isInserted;
	}

	@Override
	public boolean updateRecord(String qry, Engineering model,
			String userName) {

		boolean isUpdated = false;
		try {
			isUpdated = insertUpdate(qry, model.getPodId(), model.getPodName(),
					model.getPeriodMonth(),model.getPeriodYear(),model.getcodeQualityCyclometric(),
					model.getTechnicalCode(),
					model.getMaintainabilityQuality(), 
					model.getSecurityDefects(), model.getComments(), userName,
					model.getId());
		} catch (Exception ex) {
			LOGGER.error("Error in updating Enginerring metric type record.",ex.getMessage());
		}

		return isUpdated;
	}

	@Override
	public boolean deleteRecord(String qry, Engineering model) {

		boolean isDeleted = false;
		try {
			isDeleted = insertUpdate(qry, model.getId());
		} catch (Exception ex) {
			LOGGER.error("Error in deleting Enginerring metric type record.",ex.getMessage());
		}

		return isDeleted;
	}

}
