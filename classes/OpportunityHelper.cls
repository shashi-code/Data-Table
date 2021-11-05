public with sharing class OpportunityHelper {
    public OpportunityHelper() {

    }
    @AuraEnabled(cacheable=true)
    public static List<OpportunityLineItem> getProductList(String oppId) {
        return [SELECT Id, Name, OpportunityId,Quantity,UnitPrice
            FROM OpportunityLineItem where OpportunityId =: oppId ];
    }
}
