package com.configuration;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.configuration.*;
import com.pages.HomePage;
import com.pages.SumCalculatorPage;
public class BaseUITest {

	public static WebDriver Driver;
	
	 public static String url;
	 

     public static void setUp()
     {
    	
    	 System.setProperty("webdriver.chrome.driver", "C:\\Users\\mullai.malar\\eclipse-workspace\\AutomationAddition\\src\\test\\java\\com\\driver\\chromedriver.exe");

    	 if (BaseUITestConstants.DRIVER == null)
    	 {
    		 BaseUITestConstants.DRIVER = new ChromeDriver();
    	 }

    	// BaseUITestConstants.URL = url;
    	 BaseUITestConstants.DRIVER.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        
    	 Driver = BaseUITestConstants.DRIVER;
    	 
    	 Driver.manage().window().maximize();
    	
     }

   
     public static void teardown()
     {
         try
         {
        	 BaseUITestConstants.DRIVER = null;
            Driver.quit();
         }
         catch (Exception e)
         {
             // Ignore errors if unable to close the browser
         }
     }
     
    
}
