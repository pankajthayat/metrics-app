package com.cognizant.dao;

import java.util.List;

import com.cognizant.model.Engineering;

/**
 * @author 739243
 *
 */

public interface EngineeringDAO {

	List<List<String>> loadPod(String qry, String project);

	boolean insertRecord(String qry, Engineering model, String userName);

	boolean updateRecord(String qry, Engineering model, String userName);

	boolean deleteRecord(String qry, Engineering model);

}
