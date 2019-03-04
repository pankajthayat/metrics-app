package com.cognizant.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.cognizant.model.Agile;
import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.service.CommonImpl;
import com.cognizant.service.EngineeringImpl;

@Component
public class AgileDAOImpl extends CommonImpl implements AgileDAO{

	private static final Logger LOGGER = LoggerFactory
			.getLogger(EngineeringImpl.class);
	
	@Override
	public boolean insertRecord(String qry, Agile model,String userName) {
		boolean isInserted=false;
		
		try{
		isInserted=insertUpdate(AgileQueries.ADD_RECORD,model.getPodId(),model.getPodName(),model.getMonth(),
				model.getYear(),model.getIteration(),model.getCognizantTeamSize(),model.getTelstraTeamSize(),
				model.getNumberOfCognizantHolidays(),model.getNumberOfCognizantleaves(),
				model.getNumberOfTelstraHolidays(),model.getNumberOfTelstraleaves(),model.getIterationNumber(),
				model.getUserStoriesCommitted(),model.getUserStoriesAccepted(),
				model.getCommittedStoryPoints(),model.getAcceptedStoryPoints(),model.getAcceptedStoryPointsPerWeek(),
				model.getUnitTestCoverage(),model.getAverageCycle(),
				model.getVelocityRate(),model.getCommitmentReliability(),
				model.getComments(),userName);
		
		}
		catch(Exception ex)
		{
			LOGGER.error("Error in creating Agile metric type record.",ex.getMessage());
		}
		return isInserted;
	}

	@Override
	public boolean updateRecord(String qry, Agile model) {
		boolean isUpdated =false;
		try
		{
			isUpdated=insertUpdate(AgileQueries.UPDATE_RECORD,model.getPodName(),model.getMonth(),
					model.getYear(),model.getIteration(),model.getCognizantTeamSize(),model.getTelstraTeamSize(),
					model.getNumberOfCognizantHolidays(),model.getNumberOfCognizantleaves(),
					model.getNumberOfTelstraHolidays(),model.getNumberOfTelstraleaves(),model.getIterationNumber(),
					model.getUserStoriesCommitted(),model.getUserStoriesAccepted(),
					model.getCommittedStoryPoints(),model.getAcceptedStoryPoints(),model.getAcceptedStoryPointsPerWeek(),
					model.getUnitTestCoverage(),model.getAverageCycle(),
					model.getVelocityRate(),model.getCommitmentReliability(),model.getVelocityPerWeek(),
					model.getComments(),model.getId());
			
		}
		catch (Exception e) {
			LOGGER.error("Error in updating Agile metric type record.",e.getMessage());
		}
		return isUpdated;
	}

	@Override
	public boolean deleteRecord(String qry, Agile model) {
		boolean isDeleted =false;
		try
		{
			isDeleted=insertUpdate(AgileQueries.DELETE_RECORD,model.getId());
		}
		catch (Exception e) {
			LOGGER.error("Error in updating Agile metric type record.",e.getMessage());
		}
		return isDeleted;
	}

}
