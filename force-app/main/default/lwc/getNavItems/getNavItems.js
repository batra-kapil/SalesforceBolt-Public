import { LightningElement, wire, api } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi';
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class GetNavItems extends LightningElement {
  @api tabs = ['standard-Account', 'standard-CollaborationGroup'];
    @wire(getNavItems, {
        formFactor: FORM_FACTOR
    })
    propertyOrFunction;

    connectedCallback() {
        console.log('###Page Load');
        console.log('###Nav Items: ' + JSON.stringify(this.propertyOrFunction));
    }
}