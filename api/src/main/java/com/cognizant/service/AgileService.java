package com.cognizant.service;

import com.cognizant.model.Agile;
public interface AgileService {
	String addRecord(Agile model,String userName);

	String updateRecord(Agile model);

	String deleteRecord(Agile model);
	
}
