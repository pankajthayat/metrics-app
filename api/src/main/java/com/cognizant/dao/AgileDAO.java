package com.cognizant.dao;

import com.cognizant.model.Agile;


public interface AgileDAO {
	public boolean insertRecord(String qry, Agile model,String userName);

	public boolean updateRecord(String qry, Agile model);

   public boolean deleteRecord(String qry, Agile model);
}
