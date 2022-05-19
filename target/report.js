$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/NITHIN RAJ E/eclipse-workspace/AdactinBDDTask/src/test/resources/adactintask.feature");
formatter.feature({
  "name": "Validate the Hotel Booking Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate user login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter invalid username \"nithinraje\" and invalid password \"9876543210\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterInvalidUsernameAndInvalidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userValidatesTheSuccessfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login error message with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter invalid username \"summa\" and invalid password \"summa\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterInvalidUsernameAndInvalidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the error message displeyed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userValidatesTheErrorMessageDispleyed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login error message with empty fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter invalid username \"\" and invalid password \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterInvalidUsernameAndInvalidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the warning message displeyed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userValidatesTheWarningMessageDispleyed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Select Hotel page displayed when only mandatory fields entered on the Search Hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter valid username \"nithinraje\" and valid password \"9876543210\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterValidUsernameAndValidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter location \"Sydney\",  no of rooms \"1\", checkin date \"15/05/2022\", checkout date \"16/05/2022\", no of adults \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterLocationNoOfRoomsCheckinDateCheckoutDateNoOfAdults(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the Select Hotel page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userValidatesTheSelectHotelPageDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate error message displayed when invalid dates entered in checkin and checkout fields in Search Hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter valid username \"nithinraje\" and valid password \"9876543210\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterValidUsernameAndValidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter location \"London\",  no of rooms \"1\", checkin date \"16/05/2022\", checkout date \"15/05/2022\", no of adults \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterLocationNoOfRoomsCheckinDateCheckoutDateNoOfAdults(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to validate the date error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_needs_to_validate_the_date_error_message_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the booking function by passing all valid arguments and cancel the booked order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter valid username \"nithinraje\" and valid password \"9876543210\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterValidUsernameAndValidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter location \"New York\", select hotel \"Hotel Creek\", select roomtype \"Super Deluxe\", no of rooms \"1\", checkin date \"13/05/2022\", checkout date \"15/05/2022\", no of adults \"2\", no of children \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterLocationSelectHotelSelectRoomtypeNoOfRoomsCheckinDateCheckoutDateNoOfAdultsNoOfChildren(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to select the radio button of the hotel and click continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToSelectTheRadioButtonOfTheHotelAndClickContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter firstname \"Nithin\", lastname \"Raj\", address \"Vadipatti, Madurai\", credit card number \"6398521456328745\", credit card type \"VISA\", expiry month \"3\", expiry year \"2022\" and cvv no \"963\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterFirstnameLastnameAddressCreditCardNumberCreditCardTypeExpiryMonthExpiryYearAndCvvNo(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click book now button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickBookNowButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to store the Order ID",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToStoreTheOrderID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the My Itenrary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheMyItenrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter the Order ID into the Search box and click Go",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterTheOrderIDIntoTheSearchBoxAndClickGo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click respective radio button and click Cancel Selected",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickRespectiveRadioButtonAndClickCancelSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to accept the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToAcceptThePopup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Cancel function from the Booking Itenerary",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user needs to initiate \"chrome\" and launch \"https://adactinhotelapp.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToInitiateAndLaunch(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to enter valid username \"nithinraje\" and valid password \"9876543210\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.userNeedsToEnterValidUsernameAndValidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on Booked Itenerary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToClickOnBookedItenerary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user needs to click on the respective radio button of order ID \"3CCC3434HR\" and click Cancel Selected",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_needs_to_click_on_the_respective_radio_button_of_order_ID_and_click_Cancel_Selected(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"input[value\u003d\u0027Cancel 3CCC3434HR\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027NITHIN\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ea48f267cbd5f87938677926366a6bff, findElement {using\u003dcss selector, value\u003dinput[value\u003d\u0027Cancel 3CCC3434HR\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\NITHIN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:12848}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:12848/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ea48f267cbd5f87938677926366a6bff\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.stepdef.StepDef.user_needs_to_click_on_the_respective_radio_button_of_order_ID_and_click_Cancel_Selected(StepDef.java:189)\r\n\tat ✽.user needs to click on the respective radio button of order ID \"3CCC3434HR\" and click Cancel Selected(C:/Users/NITHIN RAJ E/eclipse-workspace/AdactinBDDTask/src/test/resources/adactintask.feature:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user needs to accept the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.userNeedsToAcceptThePopup()"
});
formatter.result({
  "status": "skipped"
});
});