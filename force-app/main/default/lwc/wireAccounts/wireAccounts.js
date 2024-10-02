import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';


export default class WireAccounts extends LightningElement {
        @wire(getAccountList) accounts;

}