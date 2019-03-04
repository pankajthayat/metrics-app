package com.cognizant.dao;

import java.util.List;


public interface DashboardDAO {
	
	List<String> getAgileMonths(String year);
	List<String> getAgileYears();
	List<List<String>> getAgileRecords(String year,String month);
	
	String getPodName(String year);

	List<String> getDevopsMonths(String year);
	List<String> getDevopsYears();
	List<List<String>> getDevopsRecords(String year,String month);
	
	List<String> getEnggMonths(String year);
	List<String> getEnggYears();
	List<List<String>> getEnggRecords(String year,String month);
	
	List<String> getCognizantTeamSize(String year,String month);
	 List<String> getTelstraTeamSize(String year,String month);
	 List<List<String>> getProjectDashboardmetrics(String year,String month);
	 List<List<String>> getProgramDashboardmetrics(String year,String month);
	String getCardAverageCycle();
	String getCardVelocityPerWeek();
	String getCardFrequencyOfDeployment();
	String getCardPostProdDefects();
	String getCardCodeQualityTechnical();
	String getCardCodeQualityCyclometric();
	String getCardVelocityPerWeekNoProject();
	String getCardAverageCycleNoProject();
	String getCardFrequencyOfDeploymentNoProject();
	String getCardPostProdDefectsNoProject();
	String getCardCodeQualityTechnicalNoProject();
	String getCardCodeQualityCyclometricNoProject();
}
