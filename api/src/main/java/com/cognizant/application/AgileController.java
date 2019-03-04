package com.cognizant.application;
import javax.ws.rs.BadRequestException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.model.Agile;
import com.cognizant.service.AgileService;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;

@RestController
@RequestMapping("/metrics-app/v1/api/agile")
@CrossOrigin(origins = "*")
public class AgileController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	public AgileService service;

	@RequestMapping(value = ApiNames.ADD_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> addRecord(@RequestBody Agile model,@RequestHeader("userName") String userName)
			{
		try {
			return new ResponseEntity<>(
					service.addRecord(model,userName), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN ADD_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.EDIT_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> updateRecord(@RequestBody Agile model) {
		try {
			return new ResponseEntity<>(
					service.updateRecord(model ), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN EDIT_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.DELETE_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> deleteRecord(@RequestBody Agile model) {
		try {
			return new ResponseEntity<>(service.deleteRecord(model),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN DELETE_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}



}
