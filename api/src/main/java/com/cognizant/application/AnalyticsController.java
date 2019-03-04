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

import com.cognizant.service.AnalyticsService;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;;


/**
 * @author 680867
 *
 */

@RestController
@RequestMapping("/metrics-app/v1/api/analytics")
@CrossOrigin(origins = "*")
public class AnalyticsController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	public AnalyticsService service;
	
	@RequestMapping(value = ApiNames.AGILE_ANALYTICS, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getAgileAnalytics() {
		try {
			
			return new ResponseEntity<>(service.getAgileAnalytics(), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN AGILE_ANALYTICS===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	
	@RequestMapping(value = ApiNames.DEVOPS_ANALYTICS, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getDevopsAnalytics() {
		try {
			
			return new ResponseEntity<>(service.getDevopsAnalytics(), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN DEVOPS_ANALYTICS===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	
	@RequestMapping(value = ApiNames.ENGG_ANALYTICS, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getEnggAnalytics() {
		try {
			
			return new ResponseEntity<>(service.getEnggAnalytics(), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN ENGG_ANALYTICS===",ex.getMessage());
			throw new BadRequestException();
		}
	}
}
