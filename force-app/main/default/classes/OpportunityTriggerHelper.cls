public with sharing class OpportunityTriggerHelper {
    public OpportunityTriggerHelper() {
        System.debug('Inside OpportunityTriggerHelper Constructor');
    }
    public void componentRefreshPE() {
        System.debug('componentRefreshPE');
        Refresh_Custom_Components__e refreshEvent = new Refresh_Custom_Components__e();
        EventBus.publish(refreshEvent);
    }
}