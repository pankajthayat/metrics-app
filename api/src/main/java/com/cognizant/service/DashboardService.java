package com.cognizant.service;


public interface DashboardService {
	String getAllAgile();
	
	String getCognizantTeamSize(String year,String month);
	String getTelstraTeamSize(String year,String month);
	
	
	String getAllDevops();
	
	
	String getAllEngg();
	
	String getProjectDashboardMetrics();
	String getProgramDashboardMetrics();

}
