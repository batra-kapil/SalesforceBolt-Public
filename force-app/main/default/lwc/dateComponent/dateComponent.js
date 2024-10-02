import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import jbdateinput from '@salesforce/resourceUrl/jbdateinput';


export default class DateComponent extends LightningElement {
    isCmpInitialized = false;
    renderedCallback() {
        if (this.isCmpInitialized) { 
            return;
        }
        this.isCmpInitialized = true;
        loadScript(this, jbdateinput)
            .then(() => {
                console.log('###Loading');
            })
            .catch((error) => {
                console.log('###Eror');
            });
    }
    
}