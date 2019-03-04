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

import com.cognizant.model.Engineering;
import com.cognizant.service.EngineeringService;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
@RestController
@RequestMapping("/metrics-app/v1/api/engineering")
@CrossOrigin(origins = "*")
public class EngineeringController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	public EngineeringService service;

	@RequestMapping(value = ApiNames.LOAD_POD_API, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> loadPod() {
		try {
			return new ResponseEntity<>(service.loadPod(), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN LOAD_POD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.ADD_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> addRecord(@RequestBody Engineering model,
			@RequestHeader("userName") String userName) {
		try {
			return new ResponseEntity<>(service.addRecord(model, userName), HttpStatus.CREATED);
		} catch (Exception ex) {
			logger.info("====ERROR IN ADD_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.EDIT_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> updateRecord(@RequestBody Engineering model,
			@RequestHeader("userName") String userName) {
		try {
			return new ResponseEntity<>(
					service.updateRecord(model, userName), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN EDIT_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.DELETE_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> deleteRecord(@RequestBody Engineering model) {
		try {
			return new ResponseEntity<>(service.deleteRecord(model),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN DELETE_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

}
