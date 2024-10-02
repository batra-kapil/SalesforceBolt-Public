public with sharing class AccountController{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        return [SELECT Id, Name FROM ACCOUNT Limit 10];
    }

}