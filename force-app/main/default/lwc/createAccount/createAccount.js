import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class CreateAccount extends LightningElement {
    objectApiName=ACCOUNT_OBJECT;
    fields = [NAME_FIELD,PHONE_FIELD,REVENUE_FIELD];

    renderedCallback() {
        window.addEventListener("beforeunload", (event) => {
            console.log('@@@R@@@@efreshing.../');
            event.preventDefault();
            event.returnValue = "";            
        });

        window.addEventListener('popstate', function (event) {
        // Log the state data to the console
            console.log('@@@###PopState.../');

            console.log(event.state);
        });
    } 
   
    handleSuccess(event){
        const toastEvent=new ShowToastEvent({
            title:"Account has been created successfully !",
            message: "Account Created ",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}