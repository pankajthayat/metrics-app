package com.cognizant.dao;

import java.util.List;

public interface AnalyticsDAO {

	List<List<String>> getAgileAnalytics();
	List<List<String>> getDevopsAnalytics();
	List<List<String>> getEnggAnalytics();
}
