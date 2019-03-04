package com.cognizant.service;

@FunctionalInterface
public interface ListViewService {
	String getMetrics(String metricsType,String month,String year, String podName);
}
