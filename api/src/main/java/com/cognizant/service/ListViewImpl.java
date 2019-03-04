package com.cognizant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.dao.ListViewDAO;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@Service
public class ListViewImpl implements ListViewService {
	@Autowired
	private ListViewDAO dao;
	
	
	@Override
	public String getMetrics(String metricsType,String month,String year, String podName)
	{
		JsonArray jsonArr = new JsonArray();
		
		if("Sprint".equalsIgnoreCase(metricsType))
		{
			List<List<String>> agilemetrics=dao.getAgileMetrics(year, month, podName);
			for (int i = 0; i < agilemetrics.size(); i++) 
			{
	            List<String> temp = agilemetrics.get(i);
	            JsonObject jsonObj = new JsonObject();
	            jsonObj.addProperty("agile_id",temp.get(0));
	            jsonObj.addProperty("agile_pod_id", temp.get(1));
	            jsonObj.addProperty("agile_pod_name", temp.get(2));
	            jsonObj.addProperty("agile_month", temp.get(3));
	            jsonObj.addProperty("agile_year", temp.get(4));
	            jsonObj.addProperty("agile_iteration", temp.get(5));
	            jsonObj.addProperty("cognizant_team_size", temp.get(6));
	            jsonObj.addProperty("telstra_team_size", temp.get(7));
	            jsonObj.addProperty("agile_cognizant_holiday", temp.get(8));
	            jsonObj.addProperty("agile_cognizant_leaves", temp.get(9));
	            jsonObj.addProperty("agile_telstra_holiday", temp.get(10));
	            jsonObj.addProperty("agile_telstra_leaves", temp.get(11));
	            jsonObj.addProperty("iteration_number", temp.get(12));
	            jsonObj.addProperty("agile_userstory_commited", temp.get(13));
	            jsonObj.addProperty("agile_userstory_accepted", temp.get(14));
	            jsonObj.addProperty("agile_committed_story_points", temp.get(15));
	            jsonObj.addProperty("agile_accepted_story_points", temp.get(16));
	            jsonObj.addProperty("agile_accepted_story_points_per_week", temp.get(17));
	            jsonObj.addProperty("agile_unit_test_coverage", temp.get(18));
	            jsonObj.addProperty("agile_average_cycle", temp.get(19));
	            jsonObj.addProperty("agile_velocity_rate", temp.get(20));
	            jsonObj.addProperty("commitment_reliability", temp.get(21));
	            jsonObj.addProperty("agile_velocity_per_week", temp.get(22));
	            jsonObj.addProperty("agile_comments", temp.get(23));
	            
	            jsonArr.add(jsonObj);
			} 
		}
		
		else if("Release".equalsIgnoreCase(metricsType))
		{
			List<List<String>> devopsmetrics=dao.getDevopsMetrics(year, month, podName);
			
			for (int i = 0; i < devopsmetrics.size(); i++) 
			{
	            List<String> temp = devopsmetrics.get(i);
	            JsonObject jsonObj = new JsonObject();
	            jsonObj.addProperty("devops_id",temp.get(0));
	            jsonObj.addProperty("devops_pod_id",temp.get(1));
	            jsonObj.addProperty("devops_pod_name", temp.get(2));
	            jsonObj.addProperty("devops_release_name", temp.get(3));
	            jsonObj.addProperty("devops_release_date", temp.get(4));
	            jsonObj.addProperty("devops_release_desc", temp.get(5));
	            jsonObj.addProperty("devops_release_type", temp.get(6));
	            jsonObj.addProperty("devops_month", temp.get(7));
	            jsonObj.addProperty("devops_year", temp.get(8));
	            jsonObj.addProperty("devops_comments", temp.get(9));
	            jsonObj.addProperty("devops_rollbacks", temp.get(10));
	            jsonObj.addProperty("devops_total_defects", temp.get(11));
	            jsonObj.addProperty("devops_open_defects", temp.get(12));
	            jsonObj.addProperty("devops_post_prod_defects_high", temp.get(13));
	            jsonObj.addProperty("devops_post_prod_defects_critical", temp.get(14));
	            jsonObj.addProperty("devops_percentage_successful_deployements", temp.get(15));
	            jsonObj.addProperty("devops_total_deployements_attempted", temp.get(16));
	            jsonObj.addProperty("devops_post_prod_defects_medium", temp.get(17));
	            jsonObj.addProperty("devops_post_prod_defects_low", temp.get(18));
	            jsonArr.add(jsonObj);
			}
		}
		else
		{
			List<List<String>> enggmetrics=dao.getEngineeringMetrics(year, month, podName);
			
			for (int i = 0; i < enggmetrics.size(); i++) 
			{
	            List<String> temp = enggmetrics.get(i);
	            JsonObject jsonObj = new JsonObject();
	            jsonObj.addProperty("eng_id",temp.get(0));
	            jsonObj.addProperty("eng_pod_id",temp.get(1));
	            jsonObj.addProperty("eng_pod_name", temp.get(2));
	            jsonObj.addProperty("eng_month", temp.get(3));
	            jsonObj.addProperty("eng_year", temp.get(4));
	            jsonObj.addProperty("cyclometric_complexity", temp.get(5));
	            jsonObj.addProperty("technical_code", temp.get(6));
	            jsonObj.addProperty("maintainability_quality", temp.get(7));
	            jsonObj.addProperty("eng_security_defect", temp.get(8));
	            jsonObj.addProperty("eng_comments", temp.get(9));
	            jsonArr.add(jsonObj);
			}
		}
		return jsonArr.toString();
	}
}

