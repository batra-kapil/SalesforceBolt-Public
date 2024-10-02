import { LightningElement, wire, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class Destination extends LightningElement {
    @wire(CurrentPageReference)
    currentPageRef;

    @api sourceValue;

    get sourceValue() {
        return this.currentPageRef.state.c__source;
    }
}