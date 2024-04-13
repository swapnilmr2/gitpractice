public with sharing class getAccounList {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccounListMethod() {

        return [select Id,Name from account limit 10];

    }
}