package com.stepdefinition;

import com.configuration.BaseUITest;
import com.pages.HomePage;
import com.pages.SumCalculatorPage;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AdditionStepDefinition {
public int result;
HomePage hp= new HomePage(BaseUITest.Driver);


@Before
public void setUp() {
	BaseUITest.setUp();	 
}

@After
public void tearDown()
{
	BaseUITest.teardown();
}

@Given("^navigate to miniwebtool sum calculator page$")
public void navigate_to_miniwebtool_sum_calculator_page() throws Throwable {
  
	 hp.DoLogin();
    //BaseUITest.navigateToHomePage();
}

@When("^the user perform the request to add \"([^\"]*)\" & \"([^\"]*)\"$")
public void the_user_perform_the_request_to_add(String arg1, String arg2) throws Throwable  {
		String value = arg1+","+arg2;	
		SumCalculatorPage calculatorPage = new SumCalculatorPage(BaseUITest.Driver);
	calculatorPage.CalculateAddition(value);
}

@Then("^the sum of \"([^\"]*)\" & \"([^\"]*)\" is \"([^\"]*)\"$")
public void the_sum_of_is(String arg1, String arg2, String arg3) throws Throwable {
	SumCalculatorPage calculatorPage = new SumCalculatorPage(BaseUITest.Driver);
 	Assert.assertEquals(arg3, calculatorPage.GetResult(calculatorPage.TxtValidResult));
	
}

@Then("^the sum of invalid inputs \"([^\"]*)\" & \"([^\"]*)\" is \"([^\"]*)\"$")
public void the_sum_of_invalid_inputs_is(String arg1, String arg2, String arg3) throws Throwable {
	SumCalculatorPage calculatorPage = new SumCalculatorPage(BaseUITest.Driver);
 	Assert.assertEquals(arg3, calculatorPage.GetResult(calculatorPage.TxtInvalidResult));
}

}
