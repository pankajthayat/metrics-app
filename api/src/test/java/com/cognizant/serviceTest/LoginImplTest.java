package com.cognizant.serviceTest;

import com.cognizant.service.LoginImpl;
import com.cognizant.service.LoginService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
public class LoginImplTest {

    LoginService loginService = new LoginImpl();

    @Test
    public void testGeneratedEncryptedPasswordWithRightPassword(){
       String firstAttempt =    loginService.generateUserPw("pramod123");
       String secondAttempt = loginService.generateUserPw("pramod123");
       Assert.assertEquals(firstAttempt,secondAttempt);
    }

    @Test
    public void testGeneratedEncryptedPasswordWithWrongPassword(){
        String firstAttempt =    loginService.generateUserPw("pramod123");
        String secondAttempt = loginService.generateUserPw("pramod1234");
        Assert.assertNotEquals(firstAttempt,secondAttempt);
    }

}
