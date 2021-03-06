package com.cognizant.queryinterface;

public class DevOpsQueries {

	public static final String ADD_RECORD = "INSERT INTO DEVOPS (DOPS_POD_ID, DOPS_POD_NAME, DOPS_RELEASE_NAME,"
			+ "DOPS_RELEASE_DATE, DOPS_RELEASE_DESC, DOPS_RELEASE_TYPE, MONTH, YEAR,"
			+ "DOPS_COMMENTS, DOPS_ROLLBACKS, DOPS_TOTAL_DEFECTS, DOPS_OPEN_DEFECTS, DOPS_POST_PROD_DEFECTS_MEDIUM, DOPS_POST_PROD_DEFECTS_LOW,"
			+ "DOPS_POST_PROD_DEFECTS_HIGH, DOPS_POST_PROD_DEFECTS_CRITICAL, DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS,"
			+ "DOPS_TOTAL_DEPLOYMENT_ATTEMPTED,CREATE_USER,"
			+ "CREATE_DATE) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,sysdate())";

	
	public static final String LOAD_SEARCH_DEVOPS = "SELECT DOPS_ID,DOPS_POD_ID, DOPS_POD_NAME,DOPS_RELEASE_NAME,"
			+ "DOPS_RELEASE_DATE, DOPS_RELEASE_DESC,DOPS_RELEASE_TYPE,MONTH,YEAR,"
			+ "DOPS_COMMENTS,DOPS_ROLLBACKS, DOPS_TOTAL_DEFECTS, DOPS_OPEN_DEFECTS,"
			+ " DOPS_POST_PROD_DEFECTS_HIGH, DOPS_POST_PROD_DEFECTS_CRITICAL, DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS,"
			+ "DOPS_TOTAL_DEPLOYMENT_ATTEMPTED, DOPS_POST_PROD_DEFECTS_MEDIUM, DOPS_POST_PROD_DEFECTS_LOW FROM DEVOPS WHERE YEAR = ? AND MONTH = ?"
			+ "AND DOPS_POD_NAME=?";
	

	public static final String LOAD_RECORD_DEVOPS = "SELECT DOPS_ID,DOPS_POD_ID, DOPS_POD_NAME,DOPS_RELEASE_NAME,"
			+ "DOPS_RELEASE_DATE, DOPS_RELEASE_DESC,DOPS_RELEASE_TYPE,MONTH,YEAR,"
			+ "DOPS_COMMENTS,DOPS_ROLLBACKS, sum(DOPS_TOTAL_DEFECTS), sum(DOPS_OPEN_DEFECTS),"
			+ "sum(DOPS_POST_PROD_DEFECTS_HIGH), sum(DOPS_POST_PROD_DEFECTS_CRITICAL), avg(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS) IS NOT NULL,"
			+ "avg(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED),sum(DOPS_POST_PROD_DEFECTS_MEDIUM), sum(DOPS_POST_PROD_DEFECTS_LOW) FROM DEVOPS WHERE YEAR = ? AND MONTH = ?";

	public static final String LOAD_DEVOPS = "SELECT DOPS_ID,DOPS_POD_ID, DOPS_POD_NAME,DOPS_RELEASE_NAME,"
			+ "DOPS_RELEASE_DATE, DOPS_RELEASE_DESC,DOPS_RELEASE_TYPE,MONTH, YEAR,"
			+ "DOPS_COMMENTS,DOPS_ROLLBACKS, DOPS_TOTAL_DEFECTS, DOPS_OPEN_DEFECTS, DOPS_POST_PROD_DEFECTS_MEDIUM, DOPS_POST_PROD_DEFECTS_LOW, DOPS_POST_PROD_DEFECTS_HIGH, DOPS_POST_PROD_DEFECTS_CRITICAL, DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS,"
			+ "DOPS_TOTAL_DEPLOYMENT_ATTEMPTED FROM DEVOPS";

	public static final String UPDATE_RECORD = "UPDATE DEVOPS SET DOPS_POD_NAME=?,DOPS_RELEASE_NAME=?,"
			+ "DOPS_RELEASE_DATE=?, DOPS_RELEASE_DESC=?,DOPS_RELEASE_TYPE=?,MONTH=?, YEAR=?,"

			+ "DOPS_COMMENTS=?,DOPS_ROLLBACKS=?, DOPS_TOTAL_DEFECTS=?, DOPS_OPEN_DEFECTS=?, DOPS_POST_PROD_DEFECTS_MEDIUM=?,"
			+ " DOPS_POST_PROD_DEFECTS_LOW=?, DOPS_POST_PROD_DEFECTS_HIGH=?, DOPS_POST_PROD_DEFECTS_CRITICAL=?, "
			+ "DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS=?,"

			+ "DOPS_TOTAL_DEPLOYMENT_ATTEMPTED=? WHERE DOPS_ID = ?";

	public static final String DELETE_RECORD = "DELETE FROM DEVOPS WHERE DOPS_ID = ?";
	
	public static final String LOAD_PROD_DETAILS = "SELECT PRO_POD_ID, PRO_POD_NAME FROM PROJECT WHERE PRO_NAME = ?";
	
	public static final String DEP_FREQ_PROD="SELECT SUM(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
//	public static final String PERC_OF_FAILED_DEPLOYMENT="SELECT ROUND(AVG(DOPS_PERCENTAGE_FAILED),2) AS S FROM DEVOPS WHERE YEAR = ? AND month = ? GROUP BY month";
	
	public static final String MONTH="select distinct month from devops where year = ? order by month desc";
	
	public static final String YEAR="select distinct year from devops order by year desc";
	
	public static final String DEVOPS_SUCCESSFUL_DEPLOYS="SELECT AVG(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
	public static final String DEVOPS_POSTPROD_DEFECTS_CRITICAL ="SELECT AVG(DOPS_POST_PROD_DEFECTS_CRITICAL) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
	public static final String DEVOPS_POSTPROD_DEFECTS_HIGH ="SELECT AVG(DOPS_POST_PROD_DEFECTS_HIGH) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
	public static final String ANALYTICS_DEVOPS="SELECT AVG(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED),"
			+ "AVG(DOPS_ROLLBACKS),AVG(DOPS_TOTAL_DEFECTS),AVG(DOPS_OPEN_DEFECTS),AVG(DOPS_POST_PROD_DEFECTS_HIGH),"
			+ "AVG(DOPS_POST_PROD_DEFECTS_CRITICAL),AVG(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS),"
			+ "YEAR,MONTH,DOPS_POD_NAME FROM DEVOPS GROUP BY YEAR,MONTH,DOPS_POD_NAME";

	public static final String DEVOPS_TOTAL_DEPLOYMENT_PROD="SELECT AVG(DOPS_TOTAL_DEPLOYMENT_PROD) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";

	
	public static final String DEVOPS_ROLLBACKS="SELECT AVG(DOPS_ROLLBACKS) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
	public static final String DOPS_TOTAL_DEFECTS="SELECT AVG(DOPS_TOTAL_DEFECTS) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";
	
	public static final String DOPS_OPEN_DEFECTS="SELECT AVG(DOPS_OPEN_DEFECTS) FROM DEVOPS WHERE year = ? AND month = ? GROUP BY month";

	public static final String PROJECT_DASHBOARD="SELECT A.YEAR, A.MONTH, AGILE_POD_NAME,AVG(AGILE_TELSTRA_TEAM_SIZE),"
            +"AVG(AGILE_ACCEPTED_STORYPOINTS_PERWEEK),AVG(COMMITMENT_RELIABILITY),AVG(UNIT_TEST_COVERAGE),AVG(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY),"
            +"AVG(ENG_CODE_QUALITY_TECHNICAL),AVG(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS),AVG(DOPS_POST_PROD_DEFECTS_CRITICAL),AVG(AGILE_AVERAGE_CYCLE) , AVG(AGILE_COGNIZANT_TEAM_SIZE) , "
                   +"AVG(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED) FROM ENGINEERING C,AGILE A,DEVOPS B "
                   +"WHERE A.YEAR= B.YEAR "
                   +"AND B.YEAR=C.YEAR "
                   +"AND A.MONTH=B.MONTH "
                   +"AND B.MONTH=C.MONTH "
                   +"AND C.YEAR = ? "
                   +"AND C.MONTH = ? " 
                   +"GROUP BY AGILE_POD_NAME,A.MONTH";

	
	public static final String AGILE_PROJECT_DASHBOARD_2="AVG(AGILE_VELOCITY_PER_WEEK) FROM AGILE "
			+ "where AGILE_VELOCITY_PER_WEEK <> 'NA' "
			+ "AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String AGILE_PROJECT_DASHBOARD_1 = "SELECT YEAR, MONTH , sum(COMMITMENT_RELIABILITY)/count(COMMITMENT_RELIABILITY) "
			+ "FROM AGILE where COMMITMENT_RELIABILITY <> 'NA'"
			+ "AND YEAR=? AND MONTH =? group by MONTH";
			
	public static final String AGILE_PROJECT_DASHBOARD_3="SELECT AVG(UNIT_TEST_COVERAGE) FROM AGILE  where UNIT_TEST_COVERAGE <> 'NA' "
			+ "AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String AGILE_PROJECT_DASHBOARD_4="select AVG(AGILE_AVERAGE_CYCLE) FROM AGILE where AGILE_AVERAGE_CYCLE <> 'NA'"
			+ "AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String AGILE_PROJECT_DASHBOARD_5="select AVG(AGILE_ACCEPTED_STORYPOINTS_PERWEEK) FROM AGILE where AGILE_ACCEPTED_STORYPOINTS_PERWEEK <> 'NA' "
			+ "AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String DEVOP_PROJECT_DASHBOARD_1="SELECT SUM(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED) from DEVOPS "
	+ "WHERE DOPS_TOTAL_DEPLOYMENT_ATTEMPTED <> 'NA' YEAR=? AND MONTH =? group by MONTH";
	
	
	public static final String DEVOP_PROJECT_DASHBOARD_2="SELECT SUM(DOPS_POST_PROD_DEFECTS_CRITICAL) from DEVOPS "
			+ "WHERE  DOPS_POST_PROD_DEFECTS_CRITICAL <> null OR DOPS_POST_PROD_DEFECTS_CRITICAL <> 'NA' AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String DEVOP_PROJECT_DASHBOARD_3="SELECT AVG(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS)"+
	" from DEVOPS "
	+ "WHERE DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS <> null OR DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS <> 'NA' AND YEAR=? AND MONTH =? group by MONTH";
	
	public static final String ENGG_PROJECT_DASHBOARD_1="SELECT  AVG(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY) "+ 
			"from engineering WHERE ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY <> null OR ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY <> 'NA' AND  YEAR=? AND MONTH =? group by MONTH ";
	
	public static final String ENGG_PROJECT_DASHBOARD_2="SELECT  AVG(ENG_CODE_QUALITY_TECHNICAL)"+ 
	"from engineering  WHERE ENG_CODE_QUALITY_TECHNICAL <> null OR ENG_CODE_QUALITY_TECHNICAL <> 'NA' AND YEAR=? AND MONTH =? group by MONTH ";

      public static final String PROGRAM_DASHBOARD="SELECT B.YEAR, B.MONTH,(select SUM(DOPS_TOTAL_DEPLOYMENT_ATTEMPTED) "
		+ "from devops where year=? and month=?) as DOPS_TOTAL_DEPLOYMENT_ATTEMPTED,"
		+ "AVG(AGILE_VELOCITY_PER_WEEK),sum(COMMITMENT_RELIABILITY)/count(COMMITMENT_RELIABILITY),"
		+ "AVG(UNIT_TEST_COVERAGE),AVG(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY),"
		+ "AVG(ENG_CODE_QUALITY_TECHNICAL),AVG(DOPS_PERCENTAGE_SUCCESSFUL_DEPLOYMENTS),"
		+ "SUM(DOPS_POST_PROD_DEFECTS_CRITICAL) ,AVG(AGILE_AVERAGE_CYCLE),AVG(AGILE_ACCEPTED_STORYPOINTS_PERWEEK) "
		+ "FROM ENGINEERING C,AGILE A,DEVOPS B WHERE A.YEAR= B.YEAR  AND B.YEAR=C.YEAR AND A.MONTH=B.MONTH "
		+ "AND B.MONTH=C.MONTH "
		+ "AND B.YEAR = ? AND B.MONTH = ?";
	
	public static final String CARD_FREQUENCY_OF_DEPLOYMENT = "select distinct DOPS_POD_NAME from DEVOPS where DOPS_TOTAL_DEPLOYMENT_ATTEMPTED is not null AND DOPS_TOTAL_DEPLOYMENT_ATTEMPTED != '' AND DOPS_POD_NAME != '' ";


	public static final String CARD_POST_PROD_DEFECTS = "select distinct DOPS_POD_NAME from DEVOPS where DOPS_POST_PROD_DEFECTS_CRITICAL is not null AND DOPS_POST_PROD_DEFECTS_CRITICAL != '' AND DOPS_POD_NAME != ''";
	
	public static final String CARD_FREQUENCY_OF_DEPLOYMENT_NO_PROJECT = "select count(distinct DOPS_POD_NAME) from DEVOPS where DOPS_TOTAL_DEPLOYMENT_ATTEMPTED is not null AND DOPS_TOTAL_DEPLOYMENT_ATTEMPTED != '' AND DOPS_POD_NAME != '' ";


	public static final String CARD_POST_PROD_DEFECTS_NO_PROJECT = "select count(distinct DOPS_POD_NAME) from DEVOPS where DOPS_POST_PROD_DEFECTS_CRITICAL is not null AND DOPS_POST_PROD_DEFECTS_CRITICAL != '' AND DOPS_POD_NAME != ''";
}

