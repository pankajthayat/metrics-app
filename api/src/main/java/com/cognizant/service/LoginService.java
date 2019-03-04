package com.cognizant.service;

import java.util.List;

/**
 * @author 739243
 *
 */
public interface LoginService {

	String testCall();

	String generateUserPw(String password);

	List<String> getUserDetails(int userId);

	String loginUser(String userName, String password);

}
