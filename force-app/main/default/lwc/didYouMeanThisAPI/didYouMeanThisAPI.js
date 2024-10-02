import { LightningElement } from 'lwc';
import getResult from '@salesforce/apex/DidYouMeanThisAPI.getResult';
import LightningConfirm from "lightning/confirm";


export default class DidYouMeanThisAPI extends LightningElement {
    myText;

    handleonchange(event) {
        this.myText = event.target.value;
     }
    buttonClick() { 
        getResult({ text: encodeURIComponent(this.myText.trim()) }).then((response) => {
            console.log("###Response : " + response);
            let parsedData = JSON.parse(response);
            let message = parsedData.result;
            if (parsedData.is_modified === true) { 
                this.handleConfirm(message);
            }
            
        })
            .catch((error) => {
                console.log('###Error : ' + JSON.stringify(error));
            });
    }
    async handleConfirm(message) {
        const result = await LightningConfirm.open({
        message: message,
        theme: "info",
        label: "Did You Mean This?"
        });
        if (result === true) { 
            this.myText = message;
        }
    }
}