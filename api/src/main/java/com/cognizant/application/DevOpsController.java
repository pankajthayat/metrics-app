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

import com.cognizant.model.DevOps;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;
import com.cognizant.service.DevOpsService;

/**
 * 
 * @author 674228
 *
 */

@RestController
@RequestMapping("/metrics-app/v1/api/devops")
@CrossOrigin(origins = "*")
public class DevOpsController {
	
	private static final Logger logger = LoggerFactory.getLogger(DevOpsController.class);
	
	@Autowired
	public DevOpsService devOpsService;
	
	
	@RequestMapping(value = ApiNames.ADD_DEVOPS_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> addDevOpsRecord(@RequestBody DevOps model,
			@RequestHeader("userName") String userName) 
			{
		try {
			return new ResponseEntity<>(devOpsService.addDevOpsRecord(model,userName), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN ADD_DEVOPS_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}
	
	@RequestMapping(value = ApiNames.EDIT_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> updateDevOpsRecord(@RequestBody DevOps model) {
		try {
			return new ResponseEntity<>(
					devOpsService.updateDevOpsRecord(model), HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN EDIT_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.DELETE_RECORD_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> deleteDevOpsRecord(@RequestBody DevOps model) {
		try {
			return new ResponseEntity<>(devOpsService.deleteDevOpsRecord(model),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN DELETE_RECORD_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}


}
