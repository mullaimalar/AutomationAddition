package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.helper.SetterHelper;
import com.helper.VisibilityHelper;

public class SumCalculatorPage extends Page {
	
	public SumCalculatorPage(WebDriver driver) {
        this.driver = driver;
    }
    @FindBy(id  = "id_text")
    public WebElement TxtInputAreaSumCalculator;
    
    @FindBy(xpath = "//input[@value='Calculate']")
    public WebElement BtnCalculate;
    
    @FindBy(css = "table.dt tbody tr.tr2 td:nth-child(2)")
    public WebElement TxtValidResult;
    
    @FindBy(css = "table tbody tr td:nth-child(2)")
    public WebElement TxtInvalidResult;
    
    
    public void CalculateAddition(String input)
    {
    	
       SetterHelper.SetTxtInputValue(TxtInputAreaSumCalculator, input);
       VisibilityHelper.WaitForPresent(BtnCalculate);
       BtnCalculate.click();
    
    }

	public String GetResult(WebElement element) {
		
		String actualResult = element.getText();
		return actualResult;
	}
}
