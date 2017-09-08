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
		
         PageFactory.initElements(com.configuration.BaseUITest.Driver, this);
       
        baseURL = com.configuration.BaseUITestConstants.URL;
       
     }
}
