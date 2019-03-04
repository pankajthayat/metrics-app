package com.cognizant.serviceTest;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cognizant.dao.AgileDAOImpl;
import com.cognizant.model.Agile;
import com.cognizant.queryinterface.AgileQueries;
import com.cognizant.service.AgileImpl;

@RunWith(SpringJUnit4ClassRunner.class)
public class AgileImplTest {
	
	@InjectMocks
	private AgileImpl test;
	
	@Mock
	private AgileDAOImpl dao;
	
	@Test
	public void testaddRecord(){
		Agile model = agileFields();
		String userName = "swathi";
		when(dao.insertRecord(AgileQueries.ADD_RECORD, model, userName)).thenReturn(true);
		String result=test.addRecord(model, userName);
		assertEquals(result,"Record saved successfully!");
	}

	private Agile agileFields() {
		Agile test = new Agile();
		test.setAcceptedStoryPoints("asc");
		test.setAcceptedStoryPointsPerWeek("asd");
		test.setAverageCycle("cycle");
		test.setCognizantTeamSize("teasm");
		test.setComments("comments");
		test.setCommitmentReliability("reliability");
		return test;
	}
	
	@Test
	public void testAddRecordErrorScenario(){
		Agile model = agileFields();
		String userName = "swathi";
		when(dao.insertRecord("swathi", model, userName)).thenReturn(false);
		String result=test.addRecord(model, userName);
		assertEquals(result,"error");
	}

}
