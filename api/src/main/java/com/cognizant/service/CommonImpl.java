package com.cognizant.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.cognizant.util.NumericConstants;
import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
public class CommonImpl {

	private static final Logger LOGGER = LoggerFactory.getLogger(CommonImpl.class);

	@Autowired
	public JdbcTemplate dbAccess;

	/**
	 * @param sql
	 * @param args
	 * @return boolean
	 */
	public boolean insertUpdate(String sql, Object... args) {

		try {
			dbAccess.update(sql, args);
			return true;
		} catch (Exception ex) {
			
			LOGGER.error("Error in running the query : ",ex.getMessage());
		}

		return false;
	}

	/**
	 * @param sql
	 * @param args
	 * @return String
	 */
	public String getSingleResultSet(String sql, Object... args) {

		String resultStr = StringConstants.EMPTY;
		try {
			List<String> result = dbAccess.queryForList(sql, args, String.class);
			if (result != null) {
				for (int i = NumericConstants.NUM_0; i < result.size(); i++) {
					resultStr = result.get(NumericConstants.NUM_0) != null ? result.get(NumericConstants.NUM_0)
							: resultStr;
				}
			}
		} catch (Exception ex) {
			LOGGER.error("Error in running the query : " + sql);
		}

		return resultStr;
	}

	/**
	 * @param qry
	 * @param args
	 * @return List<String>
	 */
	public List<String> getListResultSet(String qry, Object... args) {

		List<String> resultList = new ArrayList<>();
		try {
			List<List<String>> tempList = getArrayListResultSet(qry, args);
			if (tempList != null && !tempList.isEmpty()) {
				for (int i = NumericConstants.NUM_0; i < tempList.size(); i++) {
					resultList.addAll(tempList.get(i));
				}
			}
		} catch (Exception ex) {
			LOGGER.error("Error in getting single result list",ex.getMessage());
		}

		return resultList;
	}

	/**
	 * @param qry
	 * @param args
	 * @return ArrayList
	 */
	public List<List<String>> getArrayListResultSet(String qry, Object... args ) {

		List<List<String>> resultList = new ArrayList<>();
		try {
			resultList = dbAccess.query(qry, new RowMapper<List<String>>() {
				@Override
				public List<String> mapRow(ResultSet rs, int rowNum) throws SQLException {
					rs.setFetchDirection(ResultSet.FETCH_FORWARD);
					List<String> temp = new ArrayList<>();
					for (int i = 1; i <= rs.getMetaData().getColumnCount(); i++) {
						temp.add(rs.getString(i) != null ? rs.getString(i) : StringConstants.EMPTY);
					}
					return temp;
				}
			}, args);
		} catch (Exception ex) {
			LOGGER.error("Error in getting result list",ex.getMessage());
		}

		return resultList;
	}

	/**
	 * @param qry
	 * @param startIndex
	 * @param endIndex
	 * @param sortBy
	 * @param sortOrder
	 * @return String
	 */
	public String getPaginationQry(String query, int currentPage) {

		int startIndex = (currentPage - 1) * 10;
		String resultList = null;
		try {
			resultList = "SELECT * FROM ( SELECT a.*, ROWNUM rownumber FROM (" + query + " ) a ) WHERE rownumber > " + startIndex
					+ " AND rownumber <= " + (startIndex + 10);
		} catch (Exception e) {
			LOGGER.error("Error in getting result list",e.getMessage());
		}

		return resultList;
	}

	/**
	 * @param query
	 * @return String
	 */
	public String getResultCountQry(String query) {

		StringBuilder countQuery = new StringBuilder();
		countQuery.append("SELECT COUNT('x') FROM (");
		countQuery.append(query);
		countQuery.append(") a");

		return countQuery.toString();
	}

}
