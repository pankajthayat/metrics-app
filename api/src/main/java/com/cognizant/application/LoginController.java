package com.cognizant.application;

import javax.ws.rs.BadRequestException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.model.User;
import com.cognizant.service.LoginService;
import com.cognizant.util.ApiNames;
import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
@RestController
@RequestMapping("/metrics-app/v1/api")
@CrossOrigin(origins = "*")
public class LoginController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	public LoginService service;

	@RequestMapping(value = {ApiNames.INITIAL_API,
			ApiNames.TEST_API}, method = RequestMethod.GET, produces = StringConstants.APPJSON)
	public ResponseEntity<String> testCall() {
		try {
			return new ResponseEntity<>(service.testCall(),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN INITIAL_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.GENERATE_USERPW_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> generateEncPw(
			@RequestParam(StringConstants.PASSWORD) String password) {
		try {
			return new ResponseEntity<>(service.generateUserPw(password),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN GENERATE_USERPW_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

	@RequestMapping(value = ApiNames.LOGIN_USER_API, method = RequestMethod.POST, produces = StringConstants.APPJSON)
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		try {
			
			return new ResponseEntity<>(
					service.loginUser(user.getUserName(), user.getPassword()),
					HttpStatus.OK);
		} catch (Exception ex) {
			logger.info("====ERROR IN LOGIN_USER_API===",ex.getMessage());
			throw new BadRequestException();
		}
	}

}
