import { LightningElement } from 'lwc';
import { registerRefreshHandler, unregisterRefreshHandler } from 'lightning/refresh';
export default class RefreshHandler extends LightningElement {
    refreshHandlerID;
    connectedCallback() {
       this.refreshHandlerID = registerRefreshHandler(this, this.refreshHandler);
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
    }
    refreshHandler() {
	 // example usage case for refresh participant
	 // fetch some data and report status once complete
        let endPoint = "https://api.<your company>.com";
        return new Promise((resolve) => {
            fetch(endPoint, {
                method: "GET"
            });
            resolve(true);
        });
    }
}