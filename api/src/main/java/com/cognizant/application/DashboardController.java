package com.cognizant.application;

import javax.ws.rs.BadRequestException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.service.DashboardService;

import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;


/**
 * @author680867
 *
 */

@RestController
@RequestMapping("/metrics-app/v1/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {


	private static final Logger logger = LoggerFactory.getLogger(DashboardController.class);
	

	@Autowired
	public DashboardService service;

	
	@RequestMapping(value = ApiNames.LOAD_AGILE, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getAllAgile() {
		try {
				return new ResponseEntity<>(service.getAllAgile(), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN LOAD_AGILE===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	@RequestMapping(value = ApiNames.LOAD_DEVOPS, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getAllDevops() {
		try {
				return new ResponseEntity<>(service.getAllDevops(), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN LOAD_DEVOPS===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	@RequestMapping(value = ApiNames.LOAD_ENGG, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getAllEngg() {
		try {
				return new ResponseEntity<>(service.getAllEngg(), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN LOAD_ENGINEERING===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	@RequestMapping(value = ApiNames.PROG_DASHBOARD, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getProgramDashboard() {
		try {
			
			return new ResponseEntity<>(service.getProgramDashboardMetrics(), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN PROGRAM DASHBOARD===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.PROJ_DASHBOARD, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getProjectDashboard() {
		try {
			
			return new ResponseEntity<>(service.getProjectDashboardMetrics(), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN PROJECT DASHBOARD===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	
}
