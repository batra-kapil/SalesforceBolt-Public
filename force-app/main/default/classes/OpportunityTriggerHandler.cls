public without sharing class OpportunityTriggerHandler {
    private boolean triggerIsExecuting=false;
    private integer triggerSize=0;
    public OpportunityTriggerHelper helper;
    public OpportunityTriggerHandler(boolean triggerIsExecuting, integer triggerSize) {
        this.triggerIsExecuting = triggerIsExecuting;
        this.triggerSize = triggerSize;
        this.helper = new OpportunityTriggerHelper();
    }
    public void beforeInsert(List<Opportunity> newOpportunities) {
        // helper.doTask1();
        // helper.doTask2();
    }
    public void beforeUpdate(List<Opportunity> oldOpportunities, List<Opportunity> newOpportunities, Map<ID, SObject> oldOpportunitiesMap, Map<ID, SObject> newOpportunitiesMap) {
        // helper.doTask3();
        // helper.doTask4();
    }
    public void beforeDelete(List<Opportunity> oldOpportunities, Map<ID, SObject> oldOpportunityMap) {
        // helper.doTask5();
        // helper.doTask1();
    }
    public void afterInsert(List<Opportunity> newOpportunities, Map<ID, SObject> newOpportunityMap) {
        // helper.doTask2();
        // helper.doTask3();
    }
    public void afterUpdate(List<Opportunity> oldOpportunities, List<Opportunity> newOpportunities, Map<ID, SObject> oldOpportunityMap, Map<ID, SObject> newOpportunityMap) {
        helper.componentRefreshPE();
    }
    public void afterDelete(List<Opportunity> oldOpportunities, Map<ID, SObject> oldOpportunityMap) {
        // helper.doTask3();
        // helper.doTask1();
    }
    public void afterUndelete(List<Opportunity> newOpportunities, Map<ID, SObject> newOpportunityMap) {
        // helper.doTask4();
        // helper.doTask2();
    }
}