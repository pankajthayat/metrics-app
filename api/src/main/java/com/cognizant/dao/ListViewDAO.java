package com.cognizant.dao;

import java.util.List;

public interface ListViewDAO {
	List<List<String>> getAgileMetrics(String month,String year, String podName);
	List<List<String>> getDevopsMetrics(String month,String year, String podName);
	List<List<String>> getEngineeringMetrics(String month,String year, String podName);
	List<List<String>> getAgileMetrics();
	List<List<String>> getDevopsMetrics();
	List<List<String>> getEngineeringMetrics();
}
