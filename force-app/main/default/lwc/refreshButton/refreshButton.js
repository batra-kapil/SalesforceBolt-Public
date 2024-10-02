import { LightningElement } from 'lwc';
import { RefreshEvent } from 'lightning/refresh';

export default class RefreshButton extends LightningElement {
   // signal a refresh programmatically
   // or via a button click
   beginRefresh() {
      this.dispatchEvent(new RefreshEvent());
   }
}