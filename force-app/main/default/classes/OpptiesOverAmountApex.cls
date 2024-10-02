public with sharing class OpptiesOverAmountApex {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpptyOverAmount(Id recordId) {
        return [SELECT Id, Name, Amount, StageName, CloseDate FROM Opportunity WHERE AccountId=:recordId];
    }
}