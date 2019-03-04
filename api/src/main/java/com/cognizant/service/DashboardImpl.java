package com.cognizant.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.DashboardDAO;
import com.cognizant.service.DashboardService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


@Service
public class DashboardImpl implements DashboardService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(DashboardImpl.class);
	
	@Autowired
	private DashboardDAO dao;
	
	private String month = "month";
	private String successfulDeploys = "successfulDeploys";
	private String commitmentReliability = "commitmentReliability";
	private String unitTestCoverage = "unitTestCoverage";

	@Override
	public String getAllAgile()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> agilemetrics=new ArrayList<>();
				
		List<String> agileyears=dao.getAgileYears();
		for(String year:agileyears)
		{
			List<String> agilemonths=dao.getAgileMonths(year);
		
			for(String s:agilemonths)
				{
					agilemetrics.addAll(dao.getAgileRecords(year,s));
				}
		}
			jsonArr=setAgileData(agilemetrics,jsonArr);
			return jsonArr.toString();
	}
	
	
	private JsonArray setAgileData(List<List<String>> agilemetrics, JsonArray jsonArr) {
		for (int i = 0; i < agilemetrics.size(); i++) {
            List<String> temp = agilemetrics.get(i);
            JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("podName",temp.get(2) );
            jsonObj.addProperty(month,temp.get(3) );
            jsonObj.addProperty("year", temp.get(4));
            jsonObj.addProperty("iteration", temp.get(5));
            jsonObj.addProperty("cognizantTeamSize", temp.get(6));
            jsonObj.addProperty("telstraTeamSize", temp.get(7));
            jsonObj.addProperty("noOfCognizantholidays", temp.get(8));
            jsonObj.addProperty("noOfCognizantleaves", temp.get(9));
            jsonObj.addProperty("noOfTelstraHolidays", temp.get(10));
            jsonObj.addProperty("noOfTelstraleaves", temp.get(11));
            jsonObj.addProperty("iterationNumber", temp.get(12));
            jsonObj.addProperty("userstoriesCommitted", temp.get(13));
            jsonObj.addProperty("userstoriesAccepted", temp.get(14));
            jsonObj.addProperty("committedStoryPoints", temp.get(15));
            jsonObj.addProperty("acceptedStoryPoints", temp.get(16));
            jsonObj.addProperty("acceptedStoryPointsPerWeek", temp.get(17));
            jsonObj.addProperty(unitTestCoverage, temp.get(18));
            jsonObj.addProperty("averageCycleTime", temp.get(19));
            jsonObj.addProperty("velocityRate", temp.get(20));
            jsonObj.addProperty(commitmentReliability, temp.get(21));
            jsonObj.addProperty("velocityPerWeek", temp.get(22));
            jsonObj.addProperty("comments", temp.get(23));
            jsonArr.add(jsonObj);
	}
		return jsonArr;
	}


	@Override
	public String getCognizantTeamSize(String year,String month)
	
	{
		int sum=0;
		List<String> size=dao.getCognizantTeamSize(year,month);
		for(String s:size)
		{
			int a=Integer.parseInt(s);
			sum+=a;
		}
		
		return sum+"";
	}
	@Override
	public String getTelstraTeamSize(String year,String month)
	
	{
		int sum=0;
		List<String> size=dao.getTelstraTeamSize(year,month);
		for(String s:size)
		{
			int a=Integer.parseInt(s);
			sum+=a;
		}
		return sum+"";
		
	}
	
	@Override
	public String getAllDevops()
	{
		
		List<List<String>> devopsmetrics=new ArrayList<>();
		JsonArray jsonArr = new JsonArray();
		
		List<String> devopsyears=dao.getDevopsYears();
		for(String year:devopsyears)
		{
			List<String> devopsmonths=dao.getDevopsMonths(year);
		
			for(String s:devopsmonths)
				{
					devopsmetrics.addAll(dao.getDevopsRecords(year, s));
				}
		}
		
		jsonArr= setDevopsData(jsonArr,devopsmetrics);
		
		return jsonArr.toString();
	}
	

	private JsonArray setDevopsData(JsonArray jsonArr, List<List<String>> devopsmetrics) {
		for (int i = 0; i < devopsmetrics.size(); i++) {
            List<String> temp = devopsmetrics.get(i);
            JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("podName",temp.get(2));
            jsonObj.addProperty("releaseName", temp.get(3));
            jsonObj.addProperty("releaseDate", temp.get(4));
            jsonObj.addProperty("releaseDescription", temp.get(5));
            jsonObj.addProperty("releaseType", temp.get(6));
            jsonObj.addProperty(month, temp.get(7));
            jsonObj.addProperty("year", temp.get(8));
            jsonObj.addProperty("comments", temp.get(9));
            jsonObj.addProperty("rollBacks", temp.get(10));
            jsonObj.addProperty("totalDefects", temp.get(11));
            jsonObj.addProperty("openDefects", temp.get(12));
            jsonObj.addProperty("postProdDefectsHigh", temp.get(13));
            jsonObj.addProperty("postProdDefectsCritical", temp.get(14));
            jsonObj.addProperty(successfulDeploys, temp.get(15));
            jsonObj.addProperty("totalDeploysAttempted", temp.get(16));
            jsonObj.addProperty("postProdDefectsMedium", temp.get(17));
            jsonObj.addProperty("postProdDefectsLow", temp.get(18));
            jsonArr.add(jsonObj);
	}
		return jsonArr;
	}


	@Override
	public String getAllEngg()
	{
		
		List<List<String>> enggmetrics=new ArrayList<>();
		JsonArray jsonArr = new JsonArray();
		
		List<String> enggyears=dao.getEnggYears();
		for(String year:enggyears)
		{
			List<String> enggmonths=dao.getEnggMonths(year);
		
			for(String s:enggmonths)
				{
				enggmetrics.addAll(dao.getEnggRecords(year, s));
				}
		}
		jsonArr= setEnggData(jsonArr,enggmetrics);
		return jsonArr.toString();
	}
	

	
	private JsonArray setEnggData(JsonArray jsonArr, List<List<String>> enggmetrics) {
		for (int i = 0; i < enggmetrics.size(); i++) {
            List<String> temp = enggmetrics.get(i);
            JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("podName", temp.get(2));
            jsonObj.addProperty(month, temp.get(3));
            jsonObj.addProperty("year", temp.get(4));
            jsonObj.addProperty("CyclometricCode", temp.get(5));
            jsonObj.addProperty("TechnicalCode", temp.get(6));
            jsonObj.addProperty("MaintainabilityIndex", temp.get(7));
            jsonObj.addProperty("SecurityDefects", temp.get(8));
            jsonObj.addProperty("comments", temp.get(9));
            jsonArr.add(jsonObj);
	}
		return jsonArr;
	}
	
	
	@Override
	public String getProjectDashboardMetrics()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> metrics=new ArrayList<>();
		
		List<String> agileyears=dao.getAgileYears();
		for(String year:agileyears)
		{
			List<String> agilemonths=dao.getAgileMonths(year);
		
			for(String s:agilemonths)
				{
				metrics.addAll(dao.getProjectDashboardmetrics(year, s));
				}
		}
		for (int i = 0; i < metrics.size(); i++) {
            List<String> temp = metrics.get(i);
            JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("year",temp.get(0) );
            jsonObj.addProperty(month,temp.get(1) );
            jsonObj.addProperty("TelstraTeamSize", temp.get(3));
            jsonObj.addProperty("AvgVelocityPerWeek", temp.get(4));
            jsonObj.addProperty(commitmentReliability, temp.get(5));
            jsonObj.addProperty(unitTestCoverage, temp.get(6));
            jsonObj.addProperty("CodeQualityCyclometric", temp.get(7));
            jsonObj.addProperty("CodeQualityTechnical", temp.get(8));
            jsonObj.addProperty(successfulDeploys, temp.get(9));
            jsonObj.addProperty("PostProdDefectsCritical", temp.get(10));
            jsonObj.addProperty("podName", temp.get(2));
            jsonObj.addProperty("CognizantTeamSize", temp.get(12));
            jsonObj.addProperty("agileAverageCycle", temp.get(11));
            jsonArr.add(jsonObj);
	}
		
		return jsonArr.toString();
	}
	

	@Override
	public String getProgramDashboardMetrics()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> metrics=new ArrayList<>();
		
		List<String> agileyears=dao.getAgileYears();
		for(String year:agileyears)
		{
			List<String> agilemonths=dao.getAgileMonths(year);
		
			for(String s:agilemonths)
				{
				metrics.addAll(dao.getProgramDashboardmetrics(year,s));
				}
		}
		for (int i = 0; i < metrics.size(); i++) {
            List<String> temp = metrics.get(i);
            JsonObject jsonObj = new JsonObject();
            jsonObj.addProperty("year",temp.get(0) );
            jsonObj.addProperty(month,temp.get(1) );
            
            jsonObj.addProperty(commitmentReliability, temp.get(2));
            jsonObj.addProperty("AvgVelocityPerWeek", temp.get(3));
            
            jsonObj.addProperty(unitTestCoverage, temp.get(4));
            jsonObj.addProperty("agileAverageCycle", temp.get(5));
            jsonObj.addProperty("averageAceeptedStoryPoint", temp.get(6));
            
            jsonObj.addProperty(successfulDeploys, temp.get(7));
            jsonObj.addProperty("PostProdDefectsCritical", temp.get(8));
            jsonObj.addProperty("frequencyOfDeployment", temp.get(9));
            
            jsonObj.addProperty("CodeQualityCyclometric", temp.get(10));
            jsonObj.addProperty("CodeQualityTechnical", temp.get(11));
            
            
            
           
            
            
            
            
            jsonObj.addProperty("cardAverageCycle", dao.getCardAverageCycle());
            jsonObj.addProperty("cardVelocityPerWeek", dao.getCardVelocityPerWeek());
            jsonObj.addProperty("cardFrequencyOfDeployment", dao.getCardFrequencyOfDeployment());
            jsonObj.addProperty("cardPostProdDefects", dao.getCardPostProdDefects());
            jsonObj.addProperty("cardCodeQualityTechnical", dao.getCardCodeQualityTechnical());
            jsonObj.addProperty("cardCodeQualityCyclometric", dao.getCardCodeQualityCyclometric());
            jsonObj.addProperty("cardAverageCycleNoProject", dao.getCardAverageCycleNoProject());
            jsonObj.addProperty("cardVelocityPerWeekNoProject", dao.getCardVelocityPerWeekNoProject());
            jsonObj.addProperty("cardFrequencyOfDeploymentNoProject", dao.getCardFrequencyOfDeploymentNoProject());
            jsonObj.addProperty("cardPostProdDefectsNoProject", dao.getCardPostProdDefectsNoProject());
            jsonObj.addProperty("cardCodeQualityTechnicalNoProject", dao.getCardCodeQualityTechnicalNoProject());
            jsonObj.addProperty("cardCodeQualityCyclometricNoProject", dao.getCardCodeQualityCyclometricNoProject());
            jsonArr.add(jsonObj);
	}
		
		return jsonArr.toString();
	}



}

