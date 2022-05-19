package com.pom;

import org.basemethods.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookedItinerary extends BaseClass {
	public BookedItinerary() {
		PageFactory.initElements(driver, this);	

	}
	
	@FindBy(id = "order_id_text")
	private WebElement search;
	
	@FindBy(id = "search_hotel_id")
	private WebElement go;

	@FindBy(id = "check_all")
	private WebElement radio;
	
	@FindBy(name = "cancelall")
	private WebElement cancel;

	public WebElement getSearch() {
		return search;
	}

	public WebElement getGo() {
		return go;
	}

	public WebElement getRadio() {
		return radio;
	}

	public WebElement getCancel() {
		return cancel;
	}
	


}

