using { custloyal_pl as my } from '../db/schema.cds';

@path: '/service/custloyal_pl'
@requires: 'authenticated-user'
service custloyal_plSrv {
  @odata.draft.enabled
  entity Customers as projection on my.Customers;
  @odata.draft.enabled
  entity Purchases as projection on my.Purchases;
  @odata.draft.enabled
  entity Redemptions as projection on my.Redemptions;
}