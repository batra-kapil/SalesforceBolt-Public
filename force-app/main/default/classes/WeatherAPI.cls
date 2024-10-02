public with sharing class WeatherAPI {
    @AuraEnabled(cacheable=true)
    public static string getWeather(String city){
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        System.debug('###Value: '+req);
        req.setEndpoint('callout:WeatherAPI/current.json?q='+city);
        req.setMethod('GET');
        HttpResponse res = http.send(req);
                System.debug('###req: '+req);

        return res.getBody();
    }
}