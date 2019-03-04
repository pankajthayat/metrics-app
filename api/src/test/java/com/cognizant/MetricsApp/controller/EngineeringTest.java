/*package com.cognizant.MetricsApp.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.cognizant.application.EngineeringController;
import com.cognizant.service.EngineeringService;

*//**
 * @author 739243
 *
 *//*
@RunWith(SpringRunner.class)
@WebMvcTest(value = EngineeringController.class, secure = false)
public class EngineeringTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private EngineeringService service;

	String expectedPodDetailsJson = "{\"1\":\"RTFA\",\"2\":\"Selfcare\",\"3\":\"PPR\"}";

	@Test
	public void loadPodApiTest() throws Exception {

		Mockito.when(service.loadPod()).thenReturn(expectedPodDetailsJson);

		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.get("/metrics-app/v1/api/engineering/project-pod")
				.accept(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		JSONAssert.assertEquals(expectedPodDetailsJson,
				result.getResponse().getContentAsString(), false);
	}

}
*/