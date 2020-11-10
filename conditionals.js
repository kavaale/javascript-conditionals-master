var clicks = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCountButton").click(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTaxButton").click(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);


	function countClick(event) {
	    event.preventDefault();
		// Increment a variable that tracks the
		// number of button clicks
        clicks++;
		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clicks);
		// When the count gets to 10, reset it to 0
        if (clicks == 10) {
            clicks = 0;
        }



	}


    function checkAge(event) {
	    event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var ageYear = parseInt($("#birthYear").val());
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        ageYear = 2020 - ageYear;
        if (ageYear < "18") {
            $("#birthYearOutput").text("Child")
        }
        else {
            $("#birthYearOutput").text("Adult")
        }
        // If they are 18 or over, print "Adult" instead
    }


    function calcSalesTax(event) {
	    event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchase = parseFloat($("#purchaseAmount").val());
        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (state == "WI") {
            var taxRate = "0.05";
        }
        else if (state == "IL") {
            var taxRate = "0.08";
        }
        else if (state == "MN") {
            var taxRate = "0.075";
        }
        else if (state == "MI") {
            var taxRate = "0.055";
        }

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        $("#salesTaxOutput").text("$" + (purchase * taxRate).toFixed(2));
        // If the user enters a state not listed above,
        // print "Error" instead
        if (taxRate == null) {
            $("#salesTaxOutput").text("Error")
        }

    }

    function recommendFood(event) {
	    event.preventDefault();
        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseInt($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge < 2) {
            var catFood = "kitten chow";
        }
        else if (2 <= catAge && catAge <= 10) {
            var catFood = "adult chow";
        }
        else if (catAge > 10) {
            var catFood = "senior chow";
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
        $("#catAgeOutput").text(catFood);

    }

    function drawCard(event) {
	    event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;
        if (faceValue == "1") {
            faceValue = "Ace"
        }
        else if (faceValue == "2") {
            faceValue = "2"
        }
        else if (faceValue == "3") {
            faceValue = "3"
        }
        else if (faceValue == "4") {
            faceValue = "4"
        }
        else if (faceValue == "5") {
            faceValue = "5"
        }
        else if (faceValue == "6") {
            faceValue = "6"
        }
        else if (faceValue == "7") {
            faceValue = "7"
        }
        else if (faceValue == "8") {
            faceValue = "8"
        }
        else if (faceValue == "9") {
            faceValue = "9"
        }
        else if (faceValue == "10") {
            faceValue = "10"
        }
        else if (faceValue == "11") {
            faceValue = "Jack"
        }
        else if (faceValue == "12") {
            faceValue = "Queen"
        }
        else if (faceValue == "13") {
            faceValue = "King"
        }

        if (suit == "1") {
            suit = "Hearts"
        }
        else if (suit == "2") {
            suit = "Spades"
        }
        else if (suit == "3") {
            suit = "Clubs"
        }
        else if (suit == "4") {
            suit = "Diamonds"
        }

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(faceValue + " of " + suit)


    }

});