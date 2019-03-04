package com.cognizant.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


import com.cognizant.util.StringConstants;

public class Agile {
	private Long id;
	private String podId=StringConstants.EMPTY;
	private String podName=StringConstants.EMPTY;
	private String month=StringConstants.EMPTY;
	private String year=StringConstants.EMPTY;
	private String iteration=StringConstants.EMPTY;
	private String cognizantTeamSize=StringConstants.EMPTY;
	private String telstraTeamSize=StringConstants.EMPTY;
	private String numberOfCognizantHolidays=StringConstants.EMPTY;
	private String numberOfCognizantleaves=StringConstants.EMPTY;
	private String numberOfTelstraHolidays=StringConstants.EMPTY;
	private String numberOfTelstraleaves=StringConstants.EMPTY;
	private String iterationNumber=StringConstants.EMPTY;
	private String averageCycle=StringConstants.EMPTY;
	private String velocityRate=StringConstants.EMPTY;
	private String commitmentReliability=StringConstants.EMPTY;
	private String velocityPerWeek=StringConstants.EMPTY;
	private String comments=StringConstants.EMPTY;
	private String userStoriesCommitted=StringConstants.EMPTY;
	private String userStoriesAccepted=StringConstants.EMPTY;
	private String committedStoryPoints=StringConstants.EMPTY;
	private String acceptedStoryPoints=StringConstants.EMPTY;
	private String acceptedStoryPointsPerWeek=StringConstants.EMPTY;
	private String unitTestCoverage=StringConstants.EMPTY;
	
	private List<Map<String, String>> agiledata = new ArrayList<Map<String,String>>();
		
	public Agile() {
		/*constructor*/
	}
	
	public Agile(Long id, String podId, String podName, String month, String year, String iteration,
			String cognizantTeamSize) {
		super();
		this.id = id;
		this.podId = podId;
		this.podName = podName;
		this.month = month;
		this.year = year;
		this.iteration = iteration;
		this.cognizantTeamSize = cognizantTeamSize;
	}
	
	
	
	public Agile(String telstraTeamSize, String numberOfCognizantHolidays, String numberOfCognizantleaves,
			String numberOfTelstraHolidays, String numberOfTelstraleaves, String iterationNumber, String averageCycle) {
		super();
		this.telstraTeamSize = telstraTeamSize;
		this.numberOfCognizantHolidays = numberOfCognizantHolidays;
		this.numberOfCognizantleaves = numberOfCognizantleaves;
		this.numberOfTelstraHolidays = numberOfTelstraHolidays;
		this.numberOfTelstraleaves = numberOfTelstraleaves;
		this.iterationNumber = iterationNumber;
		this.averageCycle = averageCycle;
	}
	
	
	

	public Agile(String velocityRate, String commitmentReliability, String velocityPerWeek, String comments,
			String userStoriesCommitted, String userStoriesAccepted) {
		super();
		this.velocityRate = velocityRate;
		this.commitmentReliability = commitmentReliability;
		this.velocityPerWeek = velocityPerWeek;
		this.comments = comments;
		this.userStoriesCommitted = userStoriesCommitted;
		this.userStoriesAccepted = userStoriesAccepted;
	}
	
	

	public Agile(String committedStoryPoints, String acceptedStoryPoints, String acceptedStoryPointsPerWeek,
			String unitTestCoverage) {
		super();
		this.committedStoryPoints = committedStoryPoints;
		this.acceptedStoryPoints = acceptedStoryPoints;
		this.acceptedStoryPointsPerWeek = acceptedStoryPointsPerWeek;
		this.unitTestCoverage = unitTestCoverage;
	}

	
	public List<Map<String, String>> getAgiledata() {
		return agiledata;
	}
	public void setAgiledata(List<Map<String, String>> agiledata) {
		this.agiledata = agiledata;
	}
	


	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the podId
	 */
	public String getPodId() {
		return podId;
	}

	/**
	 * @param podId the podId to set
	 */
	public void setPodId(String podId) {
		this.podId = podId;
	}

	/**
	 * @return the podName
	 */
	public String getPodName() {
		return podName;
	}

	/**
	 * @param podName the podName to set
	 */
	public void setPodName(String podName) {
		this.podName = podName;
	}

	/**
	 * @return the month
	 */
	public String getMonth() {
		return month;
	}

	/**
	 * @param month the month to set
	 */
	public void setMonth(String month) {
		this.month = month;
	}

	/**
	 * @return the year
	 */
	public String getYear() {
		return year;
	}

	/**
	 * @param year the year to set
	 */
	public void setYear(String year) {
		this.year = year;
	}

	/**
	 * @return the iteration
	 */
	public String getIteration() {
		return iteration;
	}

	/**
	 * @param iteration the iteration to set
	 */
	public void setIteration(String iteration) {
		this.iteration = iteration;
	}

	/**
	 * @return the cognizantTeamSize
	 */
	public String getCognizantTeamSize() {
		return cognizantTeamSize;
	}

	/**
	 * @param cognizantTeamSize the cognizantTeamSize to set
	 */
	public void setCognizantTeamSize(String cognizantTeamSize) {
		this.cognizantTeamSize = cognizantTeamSize;
	}

	/**
	 * @return the telstraTeamSize
	 */
	public String getTelstraTeamSize() {
		return telstraTeamSize;
	}

	/**
	 * @param telstraTeamSize the telstraTeamSize to set
	 */
	public void setTelstraTeamSize(String telstraTeamSize) {
		this.telstraTeamSize = telstraTeamSize;
	}

	/**
	 * @return the numberOfCognizantHolidays
	 */
	public String getNumberOfCognizantHolidays() {
		return numberOfCognizantHolidays;
	}

	/**
	 * @param numberOfCognizantHolidays the numberOfCognizantHolidays to set
	 */
	public void setNumberOfCognizantHolidays(String numberOfCognizantHolidays) {
		this.numberOfCognizantHolidays = numberOfCognizantHolidays;
	}

	/**
	 * @return the numberOfCognizantleaves
	 */
	public String getNumberOfCognizantleaves() {
		return numberOfCognizantleaves;
	}

	/**
	 * @param numberOfCognizantleaves the numberOfCognizantleaves to set
	 */
	public void setNumberOfCognizantleaves(String numberOfCognizantleaves) {
		this.numberOfCognizantleaves = numberOfCognizantleaves;
	}

	/**
	 * @return the numberOfTelstraHolidays
	 */
	public String getNumberOfTelstraHolidays() {
		return numberOfTelstraHolidays;
	}

	/**
	 * @param numberOfTelstraHolidays the numberOfTelstraHolidays to set
	 */
	public void setNumberOfTelstraHolidays(String numberOfTelstraHolidays) {
		this.numberOfTelstraHolidays = numberOfTelstraHolidays;
	}

	/**
	 * @return the numberOfTelstraleaves
	 */
	public String getNumberOfTelstraleaves() {
		return numberOfTelstraleaves;
	}

	/**
	 * @param numberOfTelstraleaves the numberOfTelstraleaves to set
	 */
	public void setNumberOfTelstraleaves(String numberOfTelstraleaves) {
		this.numberOfTelstraleaves = numberOfTelstraleaves;
	}

	/**
	 * @return the iterationNumber
	 */
	public String getIterationNumber() {
		return iterationNumber;
	}

	/**
	 * @param iterationNumber the iterationNumber to set
	 */
	public void setIterationNumber(String iterationNumber) {
		this.iterationNumber = iterationNumber;
	}

	/**
	 * @return the averageCycle
	 */
	public String getAverageCycle() {
		return averageCycle;
	}

	/**
	 * @param averageCycle the averageCycle to set
	 */
	public void setAverageCycle(String averageCycle) {
		this.averageCycle = averageCycle;
	}

	/**
	 * @return the velocityRate
	 */
	public String getVelocityRate() {
		return velocityRate;
	}

	/**
	 * @param velocityRate the velocityRate to set
	 */
	public void setVelocityRate(String velocityRate) {
		this.velocityRate = velocityRate;
	}

	/**
	 * @return the commitmentReliability
	 */
	public String getCommitmentReliability() {
		return commitmentReliability;
	}

	/**
	 * @param commitmentReliability the commitmentReliability to set
	 */
	public void setCommitmentReliability(String commitmentReliability) {
		this.commitmentReliability = commitmentReliability;
	}

	/**
	 * @return the velocityPerWeek
	 */
	public String getVelocityPerWeek() {
		return velocityPerWeek;
	}

	/**
	 * @param velocityPerWeek the velocityPerWeek to set
	 */
	public void setVelocityPerWeek(String velocityPerWeek) {
		this.velocityPerWeek = velocityPerWeek;
	}

	/**
	 * @return the comments
	 */
	public String getComments() {
		return comments;
	}

	/**
	 * @param comments the comments to set
	 */
	public void setComments(String comments) {
		this.comments = comments;
	}

	/**
	 * @return the userStoriesCommitted
	 */
	public String getUserStoriesCommitted() {
		return userStoriesCommitted;
	}

	/**
	 * @param userStoriesCommitted the userStoriesCommitted to set
	 */
	public void setUserStoriesCommitted(String userStoriesCommitted) {
		this.userStoriesCommitted = userStoriesCommitted;
	}

	/**
	 * @return the userStoriesAccepted
	 */
	public String getUserStoriesAccepted() {
		return userStoriesAccepted;
	}

	/**
	 * @param userStoriesAccepted the userStoriesAccepted to set
	 */
	public void setUserStoriesAccepted(String userStoriesAccepted) {
		this.userStoriesAccepted = userStoriesAccepted;
	}

	/**
	 * @return the committedStoryPoints
	 */
	public String getCommittedStoryPoints() {
		return committedStoryPoints;
	}

	/**
	 * @param committedStoryPoints the committedStoryPoints to set
	 */
	public void setCommittedStoryPoints(String committedStoryPoints) {
		this.committedStoryPoints = committedStoryPoints;
	}

	/**
	 * @return the acceptedStoryPoints
	 */
	public String getAcceptedStoryPoints() {
		return acceptedStoryPoints;
	}

	/**
	 * @param acceptedStoryPoints the acceptedStoryPoints to set
	 */
	public void setAcceptedStoryPoints(String acceptedStoryPoints) {
		this.acceptedStoryPoints = acceptedStoryPoints;
	}

	/**
	 * @return the acceptedStoryPointsPerWeek
	 */
	public String getAcceptedStoryPointsPerWeek() {
		return acceptedStoryPointsPerWeek;
	}

	/**
	 * @param acceptedStoryPointsPerWeek the acceptedStoryPointsPerWeek to set
	 */
	public void setAcceptedStoryPointsPerWeek(String acceptedStoryPointsPerWeek) {
		this.acceptedStoryPointsPerWeek = acceptedStoryPointsPerWeek;
	}

	/**
	 * @return the unitTestCoverage
	 */
	public String getUnitTestCoverage() {
		return unitTestCoverage;
	}

	/**
	 * @param unitTestCoverage the unitTestCoverage to set
	 */
	public void setUnitTestCoverage(String unitTestCoverage) {
		this.unitTestCoverage = unitTestCoverage;
	}

	
	
	
	
}
