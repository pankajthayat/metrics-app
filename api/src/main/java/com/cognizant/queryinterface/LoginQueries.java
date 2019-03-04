package com.cognizant.queryinterface;

/**
 * @author 739243
 *
 */
public class LoginQueries {

	public static final String GET_USERDETAILS = "SELECT FIRST_NAME, LAST_NAME FROM USER WHERE USER_ID = ?";

	public static final String GET_USERPW = "SELECT PASSWORD FROM USER WHERE USER_NAME = ?";

}
