package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.configuration.*;

public abstract class Page {
	protected WebDriver driver;
	 protected String baseURL;
	 public Page()
     {
		 System.out.println("inside page class");
         PageFactory.initElements(com.configuration.BaseUITest.Driver, this);
         //driver = com.configuration.BaseUITestConstants.DRIVER;
        baseURL = com.configuration.BaseUITestConstants.URL;
         System.out.println("end of page class");
     }
}
