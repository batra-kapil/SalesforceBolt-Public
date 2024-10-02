public with sharing class DownloadZip {
    @AuraEnabled
    public static List<Id> getFiles(String recordId){
        Set<Id> contentDocIds = new Set<Id>();
        List<Id> contentVersionIds = new List<Id>();

        for(ContentDocumentLink cdl: [SELECT ContentDocumentId FROM ContentDocumentLink
                                        WHERE LinkedEntityId=:recordId]){
                                            contentDocIds.add(cdl.ContentDocumentId);
                                        }
        
        if(contentDocIds.size()>0){
            for(ContentVersion cv: [SELECT Id FROM ContentVersion 
                                    WHERE ContentDocumentId IN:contentDocIds 
                                    AND isLatest=true]){
                                        contentVersionIds.add(cv.Id);
                                    }
            return contentVersionIds;
        }
        else{
            return null;
        }
    }
}