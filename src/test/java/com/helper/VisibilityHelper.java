package com.helper;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VisibilityHelper {
	public static void WaitForPresent(WebElement element)
    {
        try
        {
            WebDriverWait wait = new WebDriverWait(com.configuration.BaseUITest.Driver, 10);
            wait.until(ExpectedConditions.visibilityOf(element));
        }
        catch (Exception e)
        {
            // Silence this error. If UI is broken it won't be able to run next steps.
        }
    }
}
