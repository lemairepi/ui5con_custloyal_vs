sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalpl/Redemptions/test/integration/FirstJourney',
		'custloyalpl/Redemptions/test/integration/pages/RedemptionsList',
		'custloyalpl/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalpl/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);