sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalpl/Purchases/test/integration/FirstJourney',
		'custloyalpl/Purchases/test/integration/pages/CustomersList',
		'custloyalpl/Purchases/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalpl/Purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);