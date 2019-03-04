package com.cognizant.daoTest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cognizant.dao.AgileDAOImpl;
import com.cognizant.model.Agile;
import com.cognizant.queryinterface.AgileQueries;

@RunWith(SpringJUnit4ClassRunner.class)
public class AgileDAOImplTest {
	
	@InjectMocks
	private AgileDAOImpl test;
	
	@Mock
	private AgileQueries agile;
	
	
	@Test
	public void testinsertRecord(){
		String qry = "query";
		Agile model = agileFields();
		String userName = "swathi";
		test.insertRecord(qry, model, userName);
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

}
