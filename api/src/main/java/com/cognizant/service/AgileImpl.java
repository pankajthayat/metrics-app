package com.cognizant.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.AgileDAOImpl;
import com.cognizant.model.Agile;
import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.util.StringConstants;

@Service
public class AgileImpl implements AgileService{
	
	private static final Logger LOGGER = LoggerFactory
			.getLogger(AgileImpl.class);

	@Autowired	
	private AgileDAOImpl dao;
	
	private String returnMsg=StringConstants.ERROR;
	
	
	@Override
	public String addRecord(Agile model,String userName) {
		
		try {
			List<Map<String, String>> agileData = model.getAgiledata();
			for (int i = 0; i < agileData.size(); i++) {
				Map<String, String> temp = agileData.get(i);
				Agile tempModel = new Agile();
				tempModel.setAcceptedStoryPoints(temp.get("acceptedStoryPoints") != null
						? temp.get("acceptedStoryPoints")
						: StringConstants.EMPTY);
				tempModel.setAcceptedStoryPointsPerWeek(temp.get("acceptedStoryPointsPerWeek") != null
						? temp.get("acceptedStoryPointsPerWeek")
						: StringConstants.EMPTY);
				tempModel.setAverageCycle(temp.get("averageCycle") != null
						? temp.get("averageCycle")
						: StringConstants.EMPTY);
				tempModel.setCognizantTeamSize(temp.get("cognizantTeamSize") != null
						? temp.get("cognizantTeamSize")
						: StringConstants.EMPTY);
				tempModel.setComments(temp.get("comments") != null
						? temp.get("comments")
						: StringConstants.EMPTY);
				tempModel.setCommitmentReliability(temp.get("commitmentReliability") != null
						? temp.get("commitmentReliability")
						: StringConstants.EMPTY);
				tempModel.setCommittedStoryPoints(temp.get("committedStoryPoints") != null
						? temp.get("committedStoryPoints")
						: StringConstants.EMPTY);
				tempModel.setIteration(temp.get("iteration") != null
						? temp.get("iteration")
						: StringConstants.EMPTY);
				tempModel.setIterationNumber(temp.get("iterationNumber") != null
						? temp.get("iterationNumber")
						: StringConstants.EMPTY);
				tempModel.setMonth(temp.get("month") != null
						? temp.get("month")
						: StringConstants.EMPTY);
				tempModel.setNumberOfCognizantHolidays(temp.get("numberOfCognizantHolidays") != null
						? temp.get("numberOfCognizantHolidays")
						: StringConstants.EMPTY);
				tempModel.setNumberOfCognizantleaves(temp.get("numberOfCognizantleaves") != null
						? temp.get("numberOfCognizantleaves")
						: StringConstants.EMPTY);
				tempModel.setNumberOfTelstraHolidays(temp.get("numberOfTelstraHolidays") != null
						? temp.get("numberOfTelstraHolidays")
						: StringConstants.EMPTY);
				tempModel.setNumberOfTelstraleaves(temp.get("numberOfTelstraleaves") != null
						? temp.get("numberOfTelstraleaves")
						: StringConstants.EMPTY);
				tempModel.setTelstraTeamSize(temp.get("telstraTeamSize") != null
						? temp.get("telstraTeamSize")
						: StringConstants.EMPTY);
				tempModel.setUnitTestCoverage(temp.get("unitTestCoverage") != null
						? temp.get("unitTestCoverage")
						: StringConstants.EMPTY);				
				tempModel.setUserStoriesAccepted(temp.get("userStoriesAccepted") != null
								? temp.get("userStoriesAccepted")
								: StringConstants.EMPTY);
				tempModel.setUserStoriesCommitted(temp.get("userStoriesCommitted") != null
						? temp.get("userStoriesCommitted")
						: StringConstants.EMPTY);
				tempModel.setVelocityRate(temp.get("velocityRate") != null
						? temp.get("velocityRate")
						: StringConstants.EMPTY);
				tempModel.setYear(temp.get("year") != null
						? temp.get("year")
						: StringConstants.EMPTY);
				tempModel.setPodId(model.getPodId());
				tempModel.setPodName(model.getPodName());
				boolean isInserted = dao.insertRecord(AgileQueries.ADD_RECORD, tempModel, userName);
				if (isInserted)
					returnMsg = StringConstants.SAVED;
			}
		} catch (Exception ex) {
			LOGGER.error("Error in creating DevOps metric type record.");
		}
		return returnMsg;
		

	}

	@Override
	public String updateRecord(Agile model) {
		boolean isUpdated=dao.updateRecord(AgileQueries.UPDATE_RECORD, model);
		returnMsg=isUpdated?StringConstants.UPDATED:returnMsg;
		return returnMsg;
	}

	@Override
	public String deleteRecord(Agile model) {
		boolean isDeleted=dao.deleteRecord(AgileQueries.DELETE_RECORD,model);
		returnMsg=isDeleted?StringConstants.DELETED:returnMsg;
		return returnMsg;
	}
	
	
	

	

}
