import { LightningElement } from 'lwc';
import { registerRefreshContainer, unregisterRefreshContainer } from 'lightning/refresh';

export default class RefreshContainer extends LightningElement {
    refreshContainerID;
    connectedCallback() {
        this.refreshContainerID = registerRefreshContainer(this, this.refreshContainer);
    }
    disconnectedCallback() {
        unregisterRefreshContainer(this.refreshContainerID);
    }
    refreshContainer(refreshPromise) {
        console.log('refreshing');
        return refreshPromise.then((status) => {
            if (status === REFRESH_COMPLETE) {
                console.log('Done!');
            }
            else if (status === REFRESH_COMPLETE_WITH_ERRORS) {
               console.warn('Done, with issues refreshing some components');
            }
            else if (status === REFRESH_ERROR) {
               console.error('Major error with refresh.');
            }
         });
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