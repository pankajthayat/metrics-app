package com.cognizant.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.cognizant.util.StringConstants;

/**
 * 
 * @author 674228
 *
 */

public class DevOps {

	private Long id;

	private String podId = StringConstants.EMPTY;

	private String podName = StringConstants.EMPTY;

	private String releaseName = StringConstants.EMPTY;

	private String releaseDate = StringConstants.EMPTY;

	private String releaseDesc = StringConstants.EMPTY;

	private String releaseType = StringConstants.EMPTY;

	private String periodMonth = StringConstants.EMPTY;

	private String periodYear = StringConstants.EMPTY;

	private String comments = StringConstants.EMPTY;
	
	private String totalDeploymentsAttempted= StringConstants.EMPTY;
	
	private String rollbacks = StringConstants.EMPTY;
	
	private String totalDefects = StringConstants.EMPTY;
	
	private String openDefects = StringConstants.EMPTY;
	
	private String postProdDefectsHigh = StringConstants.EMPTY;
	
	private String postProdDefectsCritical = StringConstants.EMPTY;
	
	private String successfulDeployments = StringConstants.EMPTY;
	
	private String postProdDefectsMedium = StringConstants.EMPTY;
	
	private String postProdDefectsLow = StringConstants.EMPTY;
	

	public DevOps(Long id, String podId, String podName, String releaseName, String releaseDate,
			String releaseDesc, String releaseType, String periodMonth, String periodYear,
			String comments, String totalDeploymentsAttempted, String rollbacks,
			String totalDefects, String openDefects, String postProdDefectsHigh, String postProdDefectsCritical,
			String successfulDeployments, String postProdDefectsMedium, String postProdDefectsLow,
			List<Map<String, String>> dops) {
		super();
		this.id = id;
		this.podId = podId;
		this.podName = podName;
		this.releaseName = releaseName;
		this.releaseDate = releaseDate;
		this.releaseDesc = releaseDesc;
		this.releaseType = releaseType;
		this.periodMonth = periodMonth;
		this.periodYear = periodYear;
		this.comments = comments;
		this.totalDeploymentsAttempted = totalDeploymentsAttempted;
		this.rollbacks = rollbacks;
		this.totalDefects = totalDefects;
		this.openDefects = openDefects;
		this.postProdDefectsHigh = postProdDefectsHigh;
		this.postProdDefectsCritical = postProdDefectsCritical;
		this.successfulDeployments = successfulDeployments;
		this.postProdDefectsMedium = postProdDefectsMedium;
		this.postProdDefectsLow = postProdDefectsLow;
		this.dops = dops;
	}
	
	
	public String getPostProdDefectsMedium() {
		return postProdDefectsMedium;
	}

	public void setPostProdDefectsMedium(String postProdDefectsMedium) {
		this.postProdDefectsMedium = postProdDefectsMedium;
	}

	public String getPostProdDefectsLow() {
		return postProdDefectsLow;
	}

	public void setPostProdDefectsLow(String postProdDefectsLow) {
		this.postProdDefectsLow = postProdDefectsLow;
	}

	public DevOps(Long id, String podId, String podName, String releaseName, String releaseDate,
			String releaseDesc) {
		super();
		this.id = id;
		this.podId = podId;
		this.podName = podName;
		this.releaseName = releaseName;
		this.releaseDate = releaseDate;
		this.releaseDesc = releaseDesc;
	}
	
	

	public DevOps(String releaseType, String periodMonth, String periodYear, String comments,
			String totalDeploymentsAttempted) {
		super();
		this.releaseType = releaseType;
		this.periodMonth = periodMonth;
		this.periodYear = periodYear;
		this.comments = comments;
		this.totalDeploymentsAttempted = totalDeploymentsAttempted;
	}



	public DevOps(String rollbacks, String totalDefects, String openDefects, String postProdDefectsHigh,
			String postProdDefectsCritical, String successfulDeployments, List<Map<String, String>> dops) {
		super();
		this.rollbacks = rollbacks;
		this.totalDefects = totalDefects;
		this.openDefects = openDefects;
		this.postProdDefectsHigh = postProdDefectsHigh;
		this.postProdDefectsCritical = postProdDefectsCritical;
		this.successfulDeployments = successfulDeployments;
		this.dops = dops;
	}



	public String getRollbacks() {
		return rollbacks;
	}

	public void setRollbacks(String rollbacks) {
		this.rollbacks = rollbacks;
	}

	public String getTotalDefects() {
		return totalDefects;
	}

	public void setTotalDefects(String totalDefects) {
		this.totalDefects = totalDefects;
	}

	public String getOpenDefects() {
		return openDefects;
	}

	public void setOpenDefects(String openDefects) {
		this.openDefects = openDefects;
	}

	public String getPostProdDefectsHigh() {
		return postProdDefectsHigh;
	}

	public void setPostProdDefectsHigh(String postProdDefectsHigh) {
		this.postProdDefectsHigh = postProdDefectsHigh;
	}

	public String getPostProdDefectsCritical() {
		return postProdDefectsCritical;
	}

	public void setPostProdDefectsCritical(String postProdDefectsCritical) {
		this.postProdDefectsCritical = postProdDefectsCritical;
	}

	public String getSuccessfulDeployments() {
		return successfulDeployments;
	}

	public void setSuccessfulDeployments(String successfulDeployments) {
		this.successfulDeployments = successfulDeployments;
	}

	private List<Map<String, String>> dops = new ArrayList<Map<String,String>>();

	public String getPodId() {
		return podId;
	}

	public void setPodId(String podId) {
		this.podId = podId;
	}

	public String getPodName() {
		return podName;
	}

	public void setPodName(String podName) {
		this.podName = podName;
	}

	/**
	 * @return the dopsDataMap
	 */
	public List<Map<String, String>> getDops() {
		return dops;
	}

	/**
	 * @param dopsDataMap
	 *            the dopsDataMap to set
	 */
	public void setDops(List<Map<String, String>> dops) {
		this.dops = dops;
	}

	public String getReleaseName() {
		return releaseName;
	}

	public void setReleaseName(String releaseName) {
		this.releaseName = releaseName;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getReleaseDesc() {
		return releaseDesc;
	}

	public void setReleaseDesc(String releaseDesc) {
		this.releaseDesc = releaseDesc;
	}

	public String getReleaseType() {
		return releaseType;
	}

	public void setReleaseType(String releaseType) {
		this.releaseType = releaseType;
	}

	public String getPeriodMonth() {
		return periodMonth;
	}

	public void setPeriodMonth(String periodMonth) {
		this.periodMonth = periodMonth;
	}

	public String getPeriodYear() {
		return periodYear;
	}

	public void setPeriodYear(String periodYear) {
		this.periodYear = periodYear;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public DevOps() {

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


	public String getTotalDeploymentsAttempted() {
		return totalDeploymentsAttempted;
	}



	public void setTotalDeploymentsAttempted(String totalDeploymentsAttempted) {
		this.totalDeploymentsAttempted = totalDeploymentsAttempted;
	}
	
	/*public String toString()
	{
		
	}
*/
}
