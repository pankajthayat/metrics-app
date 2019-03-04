package com.cognizant.modelTest;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.cognizant.model.Agile;

@RunWith(SpringJUnit4ClassRunner.class)
public class AgileTest {
	
	@Test
	public void testAgile(){
		Agile test = new Agile();
		test.setAcceptedStoryPoints("asc");
		assertEquals("asc",test.getAcceptedStoryPoints());
		test.setAcceptedStoryPointsPerWeek("asd");
		assertEquals("asd",test.getAcceptedStoryPointsPerWeek());
		test.setAverageCycle("cycle");
		assertEquals("cycle", test.getAverageCycle());
		test.setCognizantTeamSize("teasm");
		assertEquals("teasm",test.getCognizantTeamSize());
		test.setComments("comments");
		assertEquals("comments",test.getComments());
		test.setCommitmentReliability("reliability");
		assertEquals("reliability",test.getCommitmentReliability());
	}

}
