package com.cognizant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.AnalyticsDAO;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@Service
public class AnalyticsImpl implements AnalyticsService{
	
	@Autowired
	private AnalyticsDAO dao;
	
	private String month = "month";
	private String podName = "podName";
	
	@Override
	public String getAgileAnalytics()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> agile;
		
		agile=dao.getAgileAnalytics();
	
		for(int i = 0; i < agile.size(); i++)
			
		{
			 List<String> temp=agile.get(i);
			 JsonObject jsonObj = new JsonObject();
			 jsonObj.addProperty("averageVelocityRate", temp.get(0));
			 jsonObj.addProperty("averageCommitmentReliability", temp.get(1));
			 jsonObj.addProperty("userStoriesCommitted", temp.get(2));
			 jsonObj.addProperty("userStoriesAccepted", temp.get(3));
			 jsonObj.addProperty("averageCycle", temp.get(4));
			 jsonObj.addProperty("committedStoryPoints", temp.get(5));
			 jsonObj.addProperty("acceptedStoryPoints", temp.get(6));
			 jsonObj.addProperty("cognizantTeamSize", temp.get(7));
			 jsonObj.addProperty("telstraTeamSize", temp.get(8));
			 jsonObj.addProperty("agileIteration", temp.get(9));
			 jsonObj.addProperty("noOfCtsHolidays", temp.get(11));
			 jsonObj.addProperty("noOfTelstraHolidays", temp.get(12));
			 jsonObj.addProperty("noOfCtsLeaves", temp.get(13));
			 jsonObj.addProperty("noOfTelstraLeaves", temp.get(14));
			 jsonObj.addProperty(month, temp.get(15));
			 jsonObj.addProperty("year", temp.get(16));
			 jsonObj.addProperty(podName, temp.get(17));
			 jsonArr.add(jsonObj);
		}
		return jsonArr.toString();
	}
	
	@Override
	public String getDevopsAnalytics()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> devops;
		
		devops=dao.getDevopsAnalytics();
		for(int i = 0; i < devops.size(); i++)
		{
			 List<String> temp=devops.get(i);
			 JsonObject jsonObj = new JsonObject();
			 jsonObj.addProperty("deploymentProdFrequency", temp.get(0));
			 jsonObj.addProperty("rollBacks", temp.get(1));
			 jsonObj.addProperty("totalDefects", temp.get(2));
			 jsonObj.addProperty("openDefects", temp.get(3));
			 jsonObj.addProperty("postProdDefectsHigh", temp.get(4));
			 jsonObj.addProperty("postProdDefectsCritical", temp.get(5));
			 jsonObj.addProperty("successfulDeploys", temp.get(6));
			 jsonObj.addProperty("year", temp.get(7));
			 jsonObj.addProperty(month, temp.get(8));
			 jsonObj.addProperty(podName, temp.get(9));
			 jsonArr.add(jsonObj);
		}
		return jsonArr.toString();
	}
	
	@Override
	public String getEnggAnalytics()
	{
		JsonArray jsonArr = new JsonArray();
		List<List<String>> engg;
		
		engg=dao.getEnggAnalytics();
		for(int i = 0; i < engg.size(); i++)
		{
		     List<String> temp=engg.get(i);

			 JsonObject jsonObj = new JsonObject();
			 jsonObj.addProperty("cyclometricCode", temp.get(0));
			 jsonObj.addProperty("technicalCode", temp.get(1));
			 jsonObj.addProperty("maintainabilityIndex", temp.get(2));
			 jsonObj.addProperty("securityDefects", temp.get(3));
			 jsonObj.addProperty("year", temp.get(4));
			 jsonObj.addProperty(month, temp.get(5));
			 jsonObj.addProperty(podName, temp.get(6));
			 jsonArr.add(jsonObj);
		}
		return jsonArr.toString();
	}
}

