package com.cognizant.dao;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.queryinterface.DevOpsQueries;
import com.cognizant.queryinterface.EngineeringQueries;
import com.cognizant.service.CommonImpl;


@Component
public class DashboardDAOImpl extends CommonImpl implements DashboardDAO  {
	
	@Autowired
	public JdbcTemplate jdbcTemplate;
	private static final Logger LOGGER = LoggerFactory.getLogger(DashboardDAOImpl.class);
	
	@Override
	public List<String> getAgileYears()
	{
		List<String> agileyears;
		
		agileyears=getListResultSet(AgileQueries.YEAR);
		
		return agileyears;
	}
	
	
	@Override
	public List<String> getAgileMonths(String year)
	{
		List<String> agilemonths;
		
		agilemonths=getListResultSet(AgileQueries.MONTH,year);
		
		return agilemonths;
	}
	

	@Override
	public List<List<String>> getAgileRecords(String year,String month)
	{
		List<List<String>> agile;
		
		agile=getArrayListResultSet(AgileQueries.LOAD_RECORD_AGILE,year,month);
		
		return agile;
	}
	
	
	@Override
	public List<String> getCognizantTeamSize(String year,String month)
	{
		List<String> size;
		size=getListResultSet(AgileQueries.COGNIZANT_TEAM_SIZE_SUM,year,month);
		
		return size;
	}
	
	
	@Override
	public List<String> getTelstraTeamSize(String year,String month)
	{
		List<String> size;
		size=getListResultSet(AgileQueries.TELSTRA_TEAM_SIZE_SUM,year,month);
		
		return size;
	}
	
	@Override
	public String getPodName(String year)
	{
	     String size;
		 size=getSingleResultSet(AgileQueries.AGILE_POD_NAME,year);
		
		 return size;
	}
	
	
	
	
	
	@Override
	public List<String> getDevopsYears()
	{
		List<String> devopsyears;
		
		devopsyears=getListResultSet(DevOpsQueries.YEAR);
		
		return devopsyears;
	}

	
	@Override
	public List<String> getDevopsMonths(String year)
	{
		List<String> agilemonths;
		
		agilemonths=getListResultSet(DevOpsQueries.MONTH,year);
		
		return agilemonths;
	}
	
	@Override
	public List<List<String>> getDevopsRecords(String year,String month)
	{
		List<List<String>> devops = null;
		try
		{
			
			devops=getArrayListResultSet(DevOpsQueries.LOAD_RECORD_DEVOPS,year,month);
		}
		 catch(Exception ex)
		{
				LOGGER.error("Error in getting result list",ex.getMessage());
		}
		return devops;
	}
	
	
	@Override
	public List<String> getEnggYears() {
		List<String> enggyears;
		
		enggyears=getListResultSet(EngineeringQueries.YEAR);
		
		return enggyears;
	}
	
	
	@Override
	public List<String> getEnggMonths(String year)
	{
		List<String> agilemonths;
		
		agilemonths=getListResultSet(EngineeringQueries.MONTH,year);
		
		return agilemonths;
	}
	
	@Override
	public List<List<String>> getEnggRecords(String year,String month)
	{
		List<List<String>> engg=null;
		try
		{
		
			engg=getArrayListResultSet(EngineeringQueries.LOAD_RECORD_ENGG,year,month);
		}
		catch(Exception ex)
		{
				LOGGER.error("Error in getting result list",ex.getMessage());
		}
		return engg;
	}
	
	@Override
	public List<List<String>> getProjectDashboardmetrics(String year,String month)
	{
		List<List<String>> project = null;
		try
		{
			
			project=getArrayListResultSet(DevOpsQueries.PROJECT_DASHBOARD,year,month);
		}
		 catch(Exception ex)
		{
				LOGGER.error("Error in getting result list",ex.getMessage());
		}
		return project;
	}
	
	@Override
	public List<List<String>> getProgramDashboardmetrics(String year,String month)
	{
		List<List<String>> project = null;
		List<List<String>> x = null;
		try
		{
			try{
				x=getArrayListResultSet(DevOpsQueries.AGILE_PROJECT_DASHBOARD_1,year,month);
			}
			catch(Exception e)
			{
				List<String> list=new ArrayList<String>();
				list.add(year);
				list.add(month);
				list.add(null);
				x.add(list);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.AGILE_PROJECT_DASHBOARD_2,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.AGILE_PROJECT_DASHBOARD_3,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.AGILE_PROJECT_DASHBOARD_4,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
		
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.AGILE_PROJECT_DASHBOARD_5,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
		
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.DEVOP_PROJECT_DASHBOARD_1,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.DEVOP_PROJECT_DASHBOARD_2,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.DEVOP_PROJECT_DASHBOARD_3,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			
			
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.ENGG_PROJECT_DASHBOARD_1,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
			try{
				x.get(0).addAll(getArrayListResultSet(DevOpsQueries.ENGG_PROJECT_DASHBOARD_2,year,month).get(0));
			}
			catch(Exception e)
			{
				x.get(0).add(null);
			}
		
		}
		 catch(Exception ex)
		{
				LOGGER.error("Error in getting result list",ex.getMessage());
		}
		return x;
	}


	@Override
	public String getCardAverageCycle() {
		List<String> list=getListResultSet(AgileQueries.CARD_CYCLE_VALUE);
		return list.stream().collect(Collectors.joining(", ")); 
	}


	@Override
	public String getCardVelocityPerWeek() {
		List<String> list=getListResultSet(AgileQueries.CARD_VELOCITY_PER_WEEK);
		return list.stream().collect(Collectors.joining(", ")); 
	}
	
	@Override
	public String getCardVelocityPerWeekNoProject() {
		String list=getSingleResultSet(AgileQueries.CARD_VELOCITY_PER_WEEK_NO_PROJECT);
		return list;
	}
	
	@Override
	public String getCardAverageCycleNoProject() {
		String list=getSingleResultSet(AgileQueries.CARD_CYCLE_VALUE_NO_PROJECT);
		return list;
	}

	@Override
	public String getCardFrequencyOfDeployment() {
		List<String> list=getListResultSet(DevOpsQueries.CARD_FREQUENCY_OF_DEPLOYMENT);
		return list.stream().collect(Collectors.joining(", ")); 
	}
	
	@Override
	public String getCardPostProdDefects() {
		List<String> list=getListResultSet(DevOpsQueries.CARD_POST_PROD_DEFECTS);
		return list.stream().collect(Collectors.joining(", "));
	}

	@Override
	public String getCardFrequencyOfDeploymentNoProject() {
		String list=getSingleResultSet(DevOpsQueries.CARD_FREQUENCY_OF_DEPLOYMENT_NO_PROJECT);
		return list;
	}
	
	@Override
	public String getCardPostProdDefectsNoProject() {
		String list=getSingleResultSet(DevOpsQueries.CARD_POST_PROD_DEFECTS_NO_PROJECT);
		return list;
	}
	
	@Override
	public String getCardCodeQualityTechnical() {
		List<String> list=getListResultSet(EngineeringQueries.CARD_CODE_QUALITY_TECHNICAL);
		return list.stream().collect(Collectors.joining(", "));
	}


	@Override
	public String getCardCodeQualityCyclometric() {
		List<String> list=getListResultSet(EngineeringQueries.CARD_CODE_QUALITY_CYCLOMETRIC);
		return list.stream().collect(Collectors.joining(", "));
	}

	@Override
	public String getCardCodeQualityTechnicalNoProject() {
		String list=getSingleResultSet(EngineeringQueries.CARD_CODE_QUALITY_TECHNICAL_NO_PROJECT);
		return list;
	}


	@Override
	public String getCardCodeQualityCyclometricNoProject() {
		String list=getSingleResultSet(EngineeringQueries.CARD_CODE_QUALITY_CYCLOMETRIC_NO_PROJECT);
		return list;
	}

	
	
}
