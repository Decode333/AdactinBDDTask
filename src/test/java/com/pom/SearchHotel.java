package com.pom;

import org.basemethods.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel extends BaseClass {
	public SearchHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "location")
	private WebElement location;

	@FindBy(id = "hotels")
	private WebElement hotels;

	@FindBy(id = "room_type")
	private WebElement roomType;

	@FindBy(id = "room_nos")
	private WebElement noOfRooms;

	@FindBy(id = "datepick_in")
	private WebElement checkIn;

	@FindBy(id = "datepick_out")
	private WebElement checkOut;

	@FindBy(id = "adult_room")
	private WebElement adults;

	@FindBy(id = "child_room")
	private WebElement child;

	@FindBy(id = "Submit")
	private WebElement search;

	@FindBy(xpath = "//input[@type='text'][1]")
	private WebElement userId;

	@FindBy(linkText = "Booked Itinerary")
	private WebElement booked;
	
	@FindBy(id="checkin_span")
	private WebElement dateError;
	
	public WebElement getDateError() {
		return dateError;
	}
	public WebElement getBooked() {
		return booked;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getNoOfRooms() {
		return noOfRooms;
	}

	public WebElement getCheckIn() {
		return checkIn;
	}

	public WebElement getCheckOut() {
		return checkOut;
	}

	public WebElement getAdults() {
		return adults;
	}

	public WebElement getChild() {
		return child;
	}

	public WebElement getSearch() {
		return search;
	}

	public WebElement getUserId() {
		return userId;
	}
}
