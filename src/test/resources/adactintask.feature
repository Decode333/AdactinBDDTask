Feature: Validate the Hotel Booking Functionality

  Scenario: Validate user login with valid credentials
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter invalid username "nithinraje" and invalid password "9876543210"
    And user needs to click on the login button
    Then user validates the successful login

  Scenario: Validate login error message with invalid credentials
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter invalid username "summa" and invalid password "summa"
    And user needs to click on the login button
    Then user validates the error message displeyed

  Scenario: Validate login error message with empty fields
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter invalid username "" and invalid password ""
    And user needs to click on the login button
    Then user validates the warning message displeyed

  Scenario: Validate Select Hotel page displayed when only mandatory fields entered on the Search Hotel page
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter valid username "nithinraje" and valid password "9876543210"
    And user needs to click on the login button
    Then user needs to enter location "Sydney",  no of rooms "1", checkin date "15/05/2022", checkout date "16/05/2022", no of adults "2"
    Then user needs to click on the search button
    Then user validates the Select Hotel page displayed

  
  Scenario: Validate error message displayed when invalid dates entered in checkin and checkout fields in Search Hotel page
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter valid username "nithinraje" and valid password "9876543210"
    And user needs to click on the login button
    Then user needs to enter location "London",  no of rooms "1", checkin date "16/05/2022", checkout date "15/05/2022", no of adults "2"
    Then user needs to click on the search button
    Then user needs to validate the date error message displayed

  Scenario: Validate the booking function by passing all valid arguments and cancel the booked order
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter valid username "nithinraje" and valid password "9876543210"
    And user needs to click on the login button
    Then user needs to enter location "New York", select hotel "Hotel Creek", select roomtype "Super Deluxe", no of rooms "1", checkin date "13/05/2022", checkout date "15/05/2022", no of adults "2", no of children "0"
    Then user needs to click on the search button
    Then user needs to select the radio button of the hotel and click continue button
    Then user needs to enter firstname "Nithin", lastname "Raj", address "Vadipatti, Madurai", credit card number "6398521456328745", credit card type "VISA", expiry month "3", expiry year "2022" and cvv no "963"
    Then user needs to click book now button
    Then user needs to store the Order ID
    Then user needs to click on the My Itenrary
    Then user needs to enter the Order ID into the Search box and click Go
    Then user needs to click respective radio button and click Cancel Selected
    Then user needs to accept the popup

  Scenario: Validate the Cancel function from the Booking Itenerary
    Given user needs to initiate "chrome" and launch "https://adactinhotelapp.com/index.php"
    Given user needs to enter valid username "nithinraje" and valid password "9876543210"
    And user needs to click on the login button
    Then user needs to click on Booked Itenerary
    Then user needs to click on the respective radio button of order ID "3CCC3434HR" and click Cancel Selected
    Then user needs to accept the popup
