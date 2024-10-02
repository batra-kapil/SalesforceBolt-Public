// opportunitiesOverAmount.js
import { LightningElement, api, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";
import getOppty from "@salesforce/apex/OpptiesOverAmountApex.getOpptyOverAmount";
import {
    subscribe,
    unsubscribe,
    onError,
    setDebugFlag,
    isEmpEnabled,
} from 'lightning/empApi';



export default class OpportunitiesOverAmount extends LightningElement {
  @api recordId;
  @api channelName = '/event/Refresh_Custom_Components__e';
  @wire(getOppty, { recordId: "$recordId" })
  getOppty;

    connectedCallback() {  
        const self = this;
        const callbackFunction = function (response) {
            console.log("🚀 ~ callbackFunction:"+JSON.stringify(response));
            self.refreshMyData();
        }
        subscribe(this.channelName, -1, callbackFunction).then(response => {
            console.log("🚀 ~ subscribe:"+JSON.stringify(response));
        });

    }
    refreshMyData() { 
        refreshApex(this.getOppty).then(() => {
            console.log('###Refreshing Data');    
        });
    }
}