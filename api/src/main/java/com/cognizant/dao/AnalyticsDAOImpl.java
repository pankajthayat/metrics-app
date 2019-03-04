package com.cognizant.dao;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.queryinterface.DevOpsQueries;
import com.cognizant.queryinterface.EngineeringQueries;
import com.cognizant.service.CommonImpl;
import com.cognizant.service.EngineeringImpl;


@Component
public class AnalyticsDAOImpl extends CommonImpl implements AnalyticsDAO{

	@Autowired
	public JdbcTemplate jdbcTemplate;
	private static final Logger LOGGER = LoggerFactory
			.getLogger(EngineeringImpl.class);
	@Override
	public List<List<String>> getAgileAnalytics()
	{
		List<List<String>> size;
		size=getArrayListResultSet(AgileQueries.ANALYTICS_AGILE);
		
		return size;
	}
	
	@Override
	public List<List<String>> getDevopsAnalytics()
	{
		List<List<String>> size=new ArrayList<>();
	
			
			size=getArrayListResultSet(DevOpsQueries.ANALYTICS_DEVOPS);
			
			
		return size;
	}
	
	@Override
	public List<List<String>> getEnggAnalytics()
	{
		List<List<String>> size;
		size=getArrayListResultSet(EngineeringQueries.ANALYTICS_ENGG);
		
		return size;
	}
	
}
