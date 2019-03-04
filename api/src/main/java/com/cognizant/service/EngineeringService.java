package com.cognizant.service;

import com.cognizant.model.Engineering;

/**
 * @author 739243
 *
 */
public interface EngineeringService {

	String loadPod();

	String addRecord(Engineering model, String userName);

	String updateRecord(Engineering model, String userName);

	String deleteRecord(Engineering model);

}
