package com.cognizant.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.cognizant.queryinterface.LoginQueries;
import com.cognizant.service.LoginService;
import com.cognizant.util.PasswordUtils;
import com.cognizant.util.StringConstants;

/**
 * @author 739243
 *
 */
@Service
public class LoginImpl extends CommonImpl implements LoginService {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(CommonImpl.class);

	@Override
	public String testCall() {
		return StringConstants.SERVER_RUNNING_MSG;
	}

	@Override
	public List<String> getUserDetails(int userId) {

		List<String> userDet = new ArrayList<>();
		try {

		} catch (Exception ex) {
			LOGGER.error("Error in getting user details",ex.getMessage());
		}

		return userDet;
	}

	@Override
	public String generateUserPw(String password) {

		String pwd=null;
		try {
			pwd = PasswordUtils.generateSecurePassword(password,
					StringConstants.ENC_SALT_KEY);
		} catch (Exception ex) {
			LOGGER.error("Error in generating encrypted password",ex.getMessage());
		}

		return pwd;
	}

	@Override
	public String loginUser(String userName, String password) {

		String returnMsg = StringConstants.FAILURE;
		try {
			String userDbPw = getSingleResultSet(LoginQueries.GET_USERPW,
					userName);
			if (userDbPw.length() > 0) {
				boolean passwordMatch = PasswordUtils.verifyUserPassword(
						password, userDbPw, StringConstants.ENC_SALT_KEY);
				returnMsg = passwordMatch ? StringConstants.SUCCESS : returnMsg;
			}
		} catch (Exception ex) {
			LOGGER.error("Error in user login",ex.getMessage());
		}
		return returnMsg;
	}

}
