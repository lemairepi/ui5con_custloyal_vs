/**
 * 
 * @On(event = { "CREATE" }, entity = "custloyal_plSrv.Redemptions")
 * @param {Object} req - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(req) {
    const { redeemedAmount, customer_ID } = req.data;
    const tx = cds.transaction(req);
    const customer = await tx.run(SELECT.one.from('custloyal_plSrv.Customers').where({ ID: customer_ID }));

    if (customer.totalRewardPoints < redeemedAmount) {
        req.error(400, 'Not enough reward points for redemption');
        return;
    }

    customer.totalRewardPoints -= redeemedAmount;
    customer.totalRedeemedRewardPoints += redeemedAmount;

    await tx.run(UPDATE('custloyal_plSrv.Customers').set({
        totalRewardPoints: customer.totalRewardPoints,
        totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints
    }).where({ ID: customer_ID }));
}