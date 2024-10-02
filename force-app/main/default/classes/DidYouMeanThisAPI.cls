public with sharing class DidYouMeanThisAPI {
    @AuraEnabled
    public static string getResult(String text){
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:DidYouMeanThisAPI?q='+text);
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
}