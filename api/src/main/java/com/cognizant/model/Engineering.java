package com.cognizant.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
public class Engineering {

	private Long id;

	private String podId;

	private String podName = StringConstants.EMPTY;

	private String codeQualityCyclometric;

	private String codeQualityTechnical;

	private String codeQualityMaintainability;

	private String iteration;

	private String periodMonth = StringConstants.EMPTY;

	private String periodYear = StringConstants.EMPTY;

	private String comments = StringConstants.EMPTY;
	
	private String securityDefects = StringConstants.EMPTY;	

	private List<Map<String, String>> engg = new ArrayList<Map<String,String>>();
	
	
public List<Map<String, String>> getEngg() {
		return engg;
	}


	public void setEngg(List<Map<String, String>> engg) {
		this.engg = engg;
	}


public String getSecurityDefects() {
		return securityDefects;
	}


	public void setSecurityDefects(String securityDefects) {
		this.securityDefects = securityDefects;
	}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}
	


public String getPodId() {
	return podId;
}


//public Long getEng_id() {
//	return eng_id;
//}
//
//
//public void setEng_id(Long eng_id) {
//	this.eng_id = eng_id;
//}


public void setPodId(String podId) {
	this.podId = podId;
}


public String getPodName() {
	return podName;
}


public void setPodName(String podName) {
	this.podName = podName;
}


public String getcodeQualityCyclometric() {
	return codeQualityCyclometric;
}


public void setcodeQualityCyclometric(String codeQualityCyclometric) {
	this.codeQualityCyclometric = codeQualityCyclometric;
}


public String getTechnicalCode() {
	return codeQualityTechnical;
}


public void setTechnicalCode(String technicalCode) {
	this.codeQualityTechnical = technicalCode;
}


public String getMaintainabilityQuality() {
	return codeQualityMaintainability;
}


public void setMaintainabilityQuality(String maintainabilityQuality) {
	this.codeQualityMaintainability = maintainabilityQuality;
}


public String getIteration() {
	return iteration;
}


public void setIteration(String iteration) {
	this.iteration = iteration;
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



}
