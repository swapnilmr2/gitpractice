import { LightningElement,wire } from 'lwc';
import getAccounListMethod from '@salesforce/apex/getAccounList.getAccounListMethod';

export default class LwcDatatable extends LightningElement {
    columns = [
        { label: 'Id', fieldName: 'id', type: 'id' },
        { label: 'Name', fieldName: 'name', type: 'text' }
    ];
    
    accountList;

    @wire(getAccounListMethod)
    contactListRec({data,error}){
        
        if(data){
            console.log('data : ',data);
            accountList = data;
        }else if(error){
            console.log('error',error);
        }
    }
}