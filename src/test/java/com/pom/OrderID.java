package com.pom;

import org.basemethods.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class OrderID extends BaseClass {
	public OrderID() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="order_no")
	private WebElement orderNo;
	
	@FindBy(id= "my_itinerary")
	private WebElement itenerary;

	public WebElement getOrderNo() {
		return orderNo;
	}

	public WebElement getItenerary() {
		return itenerary;
	}
	
	
}
	
