package com.helper;

import org.openqa.selenium.WebElement;

public class SetterHelper {
	  public static void SetTxtInputValue(WebElement formInputField, String value)
      {
          VisibilityHelper.WaitForPresent(formInputField);
          formInputField.sendKeys(value);
      }
}
