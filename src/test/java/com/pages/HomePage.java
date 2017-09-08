package com.pages;

import org.openqa.selenium.WebDriver;

import com.configuration.BaseUITestConstants;

public class HomePage extends Page {
	
	public HomePage(WebDriver driver) {
        this.driver = driver;
    }
	public void DoLogin()
    {		
		 BaseUITestConstants.DRIVER.get(baseURL + "/");
		         
    }
    }
