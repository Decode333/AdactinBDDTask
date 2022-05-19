package org.stepdef;

import org.basemethods.BaseClass;
import org.openqa.selenium.By;
import com.pom.Address;
import com.pom.BookedItinerary;
import com.pom.LoginPage;
import com.pom.OrderID;
import com.pom.SearchHotel;
import com.pom.SelectHotel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef extends BaseClass {
	BaseClass b = new BaseClass();
	LoginPage l;
	SearchHotel h1;
	SelectHotel h2;
	Address a;
	OrderID o;
	BookedItinerary bi;
	String droptype = "value";
	String order = null;

	@Given("user needs to initiate {string} and launch {string}")
	public void userNeedsToInitiateAndLaunch(String browser, String url) {
		driverInitiate(browser);
		launchUrl(url);
		waitFor();
	}

	@Given("user needs to enter invalid username {string} and invalid password {string}")
	public void userNeedsToEnterInvalidUsernameAndInvalidPassword(String invaliduser, String invalidpass) {
		l = new LoginPage();
		b.passText(l.getUsername(), invalidpass);
		b.passText(l.getPassword(), invalidpass);
	}

	@Given("user needs to click on the login button")
	public void userNeedsToClickOnTheLoginButton() {
		l = new LoginPage();
		b.elementClick(l.getLoginBtn());
	}

	@Then("user validates the error message displeyed")
	public void userValidatesTheErrorMessageDispleyed() {
		waitFor();
		String error = driver.findElement(By.xpath("//b[contains(text(),'Invalid Login')]")).getText();
		System.out.println(error);
	}

	@Then("user validates the successful login")
	public void userValidatesTheSuccessfulLogin() {
		waitFor();
		h1 = new SearchHotel();
		System.out.println(b.attributeValue(h1.getUserId(), droptype));

	}

	@Then("user validates the warning message displeyed")
	public void userValidatesTheWarningMessageDispleyed() {
		l = new LoginPage();
		String text = b.text(l.getEmptyUser());
		System.out.println(text);
	}

	@Given("user needs to enter valid username {string} and valid password {string}")
	public void userNeedsToEnterValidUsernameAndValidPassword(String validuser, String validpass) {
		l = new LoginPage();
		b.passText(l.getUsername(), validuser);
		b.passText(l.getPassword(), validpass);
	}

	@Then("user needs to enter location {string},  no of rooms {string}, checkin date {string}, checkout date {string}, no of adults {string}")
	public void userNeedsToEnterLocationNoOfRoomsCheckinDateCheckoutDateNoOfAdults(String loc, String rooms,
			String checkIn, String checkOut, String adults) {
		h1 = new SearchHotel();
		b.dropDownSelectOption(h1.getLocation(), droptype, loc);
		b.dropDownSelectOption(h1.getNoOfRooms(), droptype, rooms);
		clearField(h1.getCheckIn());
		b.passText(h1.getCheckIn(), checkIn);
		clearField(h1.getCheckOut());
		b.passText(h1.getCheckOut(), checkOut);
		b.dropDownSelectOption(h1.getAdults(), droptype, adults);
	}

	@Then("user needs to click on the search button")
	public void userNeedsToClickOnTheSearchButton() {
		b.elementClick(h1.getSearch());
	}

	@Then("user needs to validate the date error message displayed")
	public void user_needs_to_validate_the_date_error_message_displayed() {
		h1 = new SearchHotel();
		String text = b.text(h1.getDateError());
		System.out.println(text);
	}

	@Then("user validates the Select Hotel page displayed")
	public void userValidatesTheSelectHotelPageDisplayed() {
		String text = driver.findElement(By.xpath("//td[@class='login_title']")).getText();
		System.out.println(text);
	}

	@Then("user validates the error message displayed")
	public void userValidatesTheErrorMessageDisplayed() {
		String error = driver.findElement(By.xpath("//b[contains(text(),'Invalid Login')]")).getText();
		System.out.println(error);
	}

	@Then("user needs to enter location {string}, select hotel {string}, select roomtype {string}, no of rooms {string}, checkin date {string}, checkout date {string}, no of adults {string}, no of children {string}")
	public void userNeedsToEnterLocationSelectHotelSelectRoomtypeNoOfRoomsCheckinDateCheckoutDateNoOfAdultsNoOfChildren(
			String loc, String hotel, String room, String roomNo, String checkIn, String checkOut, String adults,
			String child) {
		h1 = new SearchHotel();
		b.dropDownSelectOption(h1.getLocation(), droptype, loc);
		b.dropDownSelectOption(h1.getHotels(), droptype, hotel);
		b.dropDownSelectOption(h1.getRoomType(), droptype, room);
		b.dropDownSelectOption(h1.getNoOfRooms(), droptype, roomNo);
		clearField(h1.getCheckIn());
		b.passText(h1.getCheckIn(), checkIn);
		clearField(h1.getCheckOut());
		b.passText(h1.getCheckOut(), checkOut);
		b.dropDownSelectOption(h1.getAdults(), droptype, adults);
		b.dropDownSelectOption(h1.getChild(), droptype, child);
	}

	@Then("user needs to select the radio button of the hotel and click continue button")
	public void userNeedsToSelectTheRadioButtonOfTheHotelAndClickContinueButton() {
		h2 = new SelectHotel();
		b.elementClick(h2.getHotelBtn());
		b.elementClick(h2.getContinueBtn());
	}

	@Then("user needs to enter firstname {string}, lastname {string}, address {string}, credit card number {string}, credit card type {string}, expiry month {string}, expiry year {string} and cvv no {string}")
	public void userNeedsToEnterFirstnameLastnameAddressCreditCardNumberCreditCardTypeExpiryMonthExpiryYearAndCvvNo(
			String fName, String lName, String address, String ccNum, String ccType, String month, String year,
			String cvv) {
		a = new Address();
		b.passText(a.getfName(), fName);
		b.passText(a.getlName(), lName);
		b.passText(a.getAddr(), address);
		b.passText(a.getCreditCardNo(), ccNum);
		b.dropDownSelectOption(a.getCreditCardType(), droptype, ccType);
		b.dropDownSelectOption(a.getExpiryMonth(), droptype, month);
		b.dropDownSelectOption(a.getExpiryYear(), droptype, year);
		b.passText(a.getCvvNo(), cvv);
	}

	@Then("user needs to click book now button")
	public void userNeedsToClickBookNowButton() {
		a = new Address();
		b.elementClick(a.getBookNowBtn());
	}

	@Then("user needs to store the Order ID")
	public void userNeedsToStoreTheOrderID() {
		o = new OrderID();
		order = (b.attributeValue(o.getOrderNo(), droptype));
	}

	@Then("user needs to click on the My Itenrary")
	public void userNeedsToClickOnTheMyItenrary() {
		b.elementClick(o.getItenerary());

	}

	@Then("user needs to enter the Order ID into the Search box and click Go")
	public void userNeedsToEnterTheOrderIDIntoTheSearchBoxAndClickGo() {
		bi = new BookedItinerary();
		b.passText(bi.getSearch(), order);
		b.elementClick(bi.getGo());
	}

	@Then("user needs to click respective radio button and click Cancel Selected")
	public void userNeedsToClickRespectiveRadioButtonAndClickCancelSelected() {
		bi = new BookedItinerary();
		b.elementClick(bi.getRadio());
		b.elementClick(bi.getCancel());
	}

	@Then("user needs to click on the respective radio button of order ID {string} and click Cancel Selected")
	public void user_needs_to_click_on_the_respective_radio_button_of_order_ID_and_click_Cancel_Selected(
			String orderId) {
		String s = "input[value='Cancel ";
		String concat = s.concat(orderId);
		String xpath = concat.concat("']");
		driver.findElement(By.cssSelector(xpath)).click();
	}

	@Then("user needs to accept the popup")
	public void userNeedsToAcceptThePopup() {
		b.gotoAlert();
		b.alertAccept();
	}

	@Then("user needs to click on Booked Itenerary")
	public void userNeedsToClickOnBookedItenerary() {
		h1 = new SearchHotel();
		b.elementClick(h1.getBooked());
	}

}
