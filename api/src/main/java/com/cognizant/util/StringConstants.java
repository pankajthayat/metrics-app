package com.cognizant.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author 739243
 *
 */
public class StringConstants {

	public static final String PROJECT = "Telstra";

	public static final String SERVER_RUNNING_MSG = "Application is running!";

	public static final String APPJSON = "application/json";

	public static final String EMPTY = "";

	public static final String EMPTY_SPACE = " ";

	public static final String PASSWORD = "password";

	public static final String SUCCESS = "success";

	public static final String SAVED = "Record saved successfully!";

	public static final String ERROR = "error";

	public static final String FAILURE = "username or password is incorrect.";

	public static final String ENC_SALT_KEY = "EqdmPh53c9x33EygXpTpcoJvc4VXLK";

	public static final String POD_ID = "podId";

	public static final String POD_NAME = "podName";

	public static final String UPDATED = "Record Updated successfully!";

	public static final String DELETED = "Record Deleted successfully!";

	public static final String HEADER = "header";

	public static final String SHEET_NAME = "sheet";
	
	public static final String SHEET_TITLE = "Metrics Report";

	public static final String ROW_INDEX = "rowIndex";

	public static final String DATE_FORMAT = "MM/dd/yyyy";

	public static final String HYPHEN = "-";

	public static final String UNDERSCORE = "_";
	
	public static final String SLASH = "/";

	public static final String EXCEL_FORMAT = ".xls";

	public static final String FILE_NAME = "Metrics_Report";

	public static final String RESULTS = "results";
	
	private static String podID = "POD ID";
	private static String podName  = "POD Name";
	private static String month = "Month";
	private static String comments = "Comments";

	public static final List<String> ENG_HEADERS = new ArrayList<String>() {
		
		private static final long serialVersionUID = 1L;

		{
			add(podID);
			add(podName);
			add(month);
			add("Year");
			add("Code Quality Cyclometric");
			add("Code Quality Technical");
			add("Code Quality Maintability");
			add("Security Defects");
			add(comments);
		}
	};

	public static final List<String> AGILE_HEADERS = new ArrayList<String>() {
		
		private static final long serialVersionUID = 1L;

		{
			add(podID);
			add(podName);
			add(month);
			add("Year");
			add("Iteration");
			add("Cognizant Team Size");
			add("Telstra Team Size");
			add("No of Cognizant Holidays");
			add("No of Cognizant Leaves");
			add("No of Telstra Holidays");
			add("No of Telstra Leaves");
			add("Iteration Number");
			add("UserStory Committed");
			add("UserStory Accepted");
			add("Committed Story Points");
			add("Accepted Story Points");
			add("Accepted Story Points Per Week");
			add("Unit Test Coverage");
			add("Average Cycle");
			add("Velocity Rate");
			add("Commitment Reliability");
			add("Velocity per Week");
			add(comments);
		}
	};

	public static final List<String> DEVOPS_HEADERS = new ArrayList<String>() {
		
		private static final long serialVersionUID = 1L;

		{
			add(podID);
			add(podName);
			add("Release Name");
			add("Release Date");
			add("Release Description");
			add("Release Type");
			add(month);
			add("Year");
			add(comments);
			add("Roll backs");
			add("Total Defects");
			add("No of Open Defects");
			add("Post Production High Defects");
			add("Post Production Critical Defects");
			add("% Successful Deployements");
			add("Total Deployments Attempted");
			add("Post Production Medium Defects");
			add("Post Production Low Defects");
			
		}
	};

	public static final Map<String, String> monthMap = new HashMap<String,String>() {
		
		private static final long serialVersionUID = 1L;

		{
			put("1", "January");
			put("2", "February");
			put("3", "March");
			put("4", "April");
			put("5", "May");
			put("6", "June");
			put("7", "July");
			put("8", "August");
			put("9", "September");
			put("10", "October");
			put("11", "November");
			put("12", "December");
		}
	};

}
