sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalpl/Customers/test/integration/FirstJourney',
		'custloyalpl/Customers/test/integration/pages/CustomersList',
		'custloyalpl/Customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalpl/Customers') + '/index.html'
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