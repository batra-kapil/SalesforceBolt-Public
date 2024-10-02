@RestResource(urlMapping='/api/invokeWehook/*')
global with sharing class WebHookHandler {
    @HttpPost
    global static void handlePost(){
        RestRequest requestContext = RestContext.request;
        RestResponse responseContext = RestContext.response;
        //Request
        //Do something when notification received
        //For demo I have created an Account
        Account acc = new Account(Name='Webhook Account 1');
        insert acc;
    }
}