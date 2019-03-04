package com.cognizant.queryinterface;

/**
 * @author 739243
 *
 */
public class EngineeringQueries {

	public static final String ADD_RECORD = "INSERT INTO ENGINEERING(ENG_POD_ID, ENG_POD_NAME,MONTH,YEAR,"
			+ "ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY,ENG_CODE_QUALITY_TECHNICAL,ENG_CODE_QUALITY_MAINTAINABILITY,ENG_SECURITY_DEFECTS,ENG_COMMENTS,"
			+ "CREATE_USER,CREATE_DATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, sysdate())";

	public static final String UPDATE_RECORD = "UPDATE ENGINEERING SET ENG_POD_ID=?,ENG_POD_NAME=?,MONTH=?,YEAR=?,ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY=?, ENG_CODE_QUALITY_TECHNICAL=?,"
			+ "ENG_CODE_QUALITY_MAINTAINABILITY=?, ENG_SECURITY_DEFECTS=?,"

			+ "ENG_COMMENTS = ?, CREATE_USER = ?, CREATE_DATE = sysdate() WHERE ENG_ID = ?";

	public static final String LOAD_SEARCH_ENGG = "SELECT ENG_ID, ENG_POD_ID, ENG_POD_NAME,MONTH, YEAR,ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY,ENG_CODE_QUALITY_TECHNICAL,"
			+ "ENG_CODE_QUALITY_MAINTAINABILITY, ENG_SECURITY_DEFECTS,ENG_COMMENTS FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? AND ENG_POD_NAME=?";


	public static final String LOAD_RECORD_ENGG = "SELECT ENG_ID, ENG_POD_ID, ENG_POD_NAME,MONTH, YEAR,avg(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY),avg(ENG_CODE_QUALITY_TECHNICAL),"
			+ "ENG_CODE_QUALITY_MAINTAINABILITY,sum(ENG_SECURITY_DEFECTS),ENG_COMMENTS FROM ENGINEERING WHERE YEAR = ? AND MONTH = ?";
	
	public static final String LOAD_ENGG = "SELECT ENG_ID, ENG_POD_ID, ENG_POD_NAME,MONTH, YEAR,ENG_CODE_QUALITY_CYCLOMETRIC, ENG_CODE_QUALITY_TECHNICAL,"
			+ "ENG_CODE_QUALITY_MAINTAINABILITY, ENG_SECURITY_DEFECTS,ENG_COMMENTS FROM ENGINEERING";
	
	public static final String DELETE_RECORD = "DELETE FROM ENGINEERING WHERE ENG_ID = ?";

	public static final String LOAD_PROD_DETAILS = "SELECT PRO_POD_ID, PRO_POD_NAME FROM PROJECT WHERE PRO_NAME = ?";

	public static final String ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY = "SELECT AVG(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY) FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? GROUP BY MONTH";

	public static final String ENG_CODE_QUALITY_TECHNICAL = "SELECT AVG(ENG_CODE_QUALITY_TECHNICAL) FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? GROUP BY MONTH";

	public static final String ENG_CODE_QUALITY_MAINTAINABILITY_INDEX = "SELECT AVG(ENG_CODE_QUALITY_MAINTAINABILITY) FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? GROUP BY MONTH";

	public static final String ENG_NO_OF_SECURITY_DEFECTS = "SELECT SUM(ENG_SECURITY_STANDARDS) FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? GROUP BY MONTH";

	public static final String ENG_OPEN_DEFECTS = "SELECT SUM(ENG_OPEN_DEFECTS) FROM ENGINEERING WHERE YEAR = ? AND MONTH = ? GROUP BY MONTH";

	public static final String MONTH="select distinct MONTH from engineering where YEAR = ? order by MONTH desc";
	
	public static final String YEAR="select distinct YEAR from engineering order by YEAR desc";
	

	public static final String ANALYTICS_ENGG="SELECT AVG(ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY),AVG(ENG_CODE_QUALITY_TECHNICAL),"
			+ "AVG(ENG_CODE_QUALITY_MAINTAINABILITY),AVG(ENG_SECURITY_DEFECTS),"
			+ "YEAR,MONTH,ENG_POD_NAME FROM ENGINEERING GROUP BY YEAR,MONTH,ENG_POD_NAME";

	public static final String CARD_CODE_QUALITY_TECHNICAL = "select distinct ENG_POD_NAME from ENGINEERING where ENG_CODE_QUALITY_TECHNICAL is not null AND ENG_CODE_QUALITY_TECHNICAL != '' AND ENG_POD_NAME != ''";

	public static final String CARD_CODE_QUALITY_CYCLOMETRIC = "select distinct ENG_POD_NAME from ENGINEERING where ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY is not null AND ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY != '' AND ENG_POD_NAME != ''";
	
	public static final String CARD_CODE_QUALITY_TECHNICAL_NO_PROJECT = "select count(distinct ENG_POD_NAME) from ENGINEERING where ENG_CODE_QUALITY_TECHNICAL is not null AND ENG_CODE_QUALITY_TECHNICAL != '' AND ENG_POD_NAME != ''";

	public static final String CARD_CODE_QUALITY_CYCLOMETRIC_NO_PROJECT = "select count(distinct ENG_POD_NAME) from ENGINEERING where ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY is not null AND ENG_CODE_QUALITY_CYCLOMETRIC_COMPLEXITY != '' AND ENG_POD_NAME != ''";

}