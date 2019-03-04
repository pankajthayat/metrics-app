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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.service.ListViewService;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;

/**
 * @author 680867
 *
 */

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/metrics-app/v1/api/listview")
public class ListViewController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	public ListViewService service;
	
	@RequestMapping(value = ApiNames.LIST_VIEW, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> getAllMetrics(@RequestParam("metricstype") String metricstype,@RequestParam("month") String month,@RequestParam("year") String year,
			@RequestParam("podname") String podname) {
		try {
			return new ResponseEntity<>(service.getMetrics(metricstype,month,year,podname), HttpStatus.OK);
			
		} catch (Exception ex) {
			logger.info("====ERROR IN LIST_VIEW===",ex.getMessage());
			throw new BadRequestException();
		}
	}

}
