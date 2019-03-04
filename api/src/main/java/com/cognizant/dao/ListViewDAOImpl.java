package com.cognizant.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.queryinterface.DevOpsQueries;
import com.cognizant.queryinterface.EngineeringQueries;
import com.cognizant.service.CommonImpl;

@Component
public class ListViewDAOImpl extends CommonImpl implements ListViewDAO{
	
	
	@Override
	public List<List<String>> getAgileMetrics(String year, String month, String podName)
	{
		List<List<String>> agilemetrics;
		
		agilemetrics= getArrayListResultSet(AgileQueries.LOAD_SEARCH_AGILE,year,month,podName);
		
	    return agilemetrics;
	}
	
	
	@Override
	public List<List<String>> getDevopsMetrics(String year, String month, String podName)
	{
		List<List<String>> devopsmetrics;
		
		devopsmetrics= getArrayListResultSet(DevOpsQueries.LOAD_SEARCH_DEVOPS,year,month,podName);
		
	    return devopsmetrics;
	}
	
	
	@Override
	public List<List<String>> getEngineeringMetrics(String year, String month, String podName)
	{
		List<List<String>> enggmetrics;
		
		enggmetrics= getArrayListResultSet(EngineeringQueries.LOAD_SEARCH_ENGG,year,month,podName);
		
	    return enggmetrics;
	}


	@Override
	public List<List<String>> getAgileMetrics() {
List<List<String>> agilemetrics;
		
		agilemetrics= getArrayListResultSet(AgileQueries.LOAD_AGILE);
		
	    return agilemetrics;
	}


	@Override
	public List<List<String>> getDevopsMetrics() {
List<List<String>> devopsmetrics;
		
		devopsmetrics= getArrayListResultSet(DevOpsQueries.LOAD_DEVOPS);
		
	    return devopsmetrics;
	}


	@Override
	public List<List<String>> getEngineeringMetrics() {
List<List<String>> enggmetrics;
		
		enggmetrics= getArrayListResultSet(EngineeringQueries.LOAD_ENGG);
		
	    return enggmetrics;
	}
}
