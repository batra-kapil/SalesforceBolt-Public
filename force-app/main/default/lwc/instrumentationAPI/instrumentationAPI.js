import { LightningElement } from 'lwc';
import { log } from 'lightning/logger'

export default class InstrumentationAPI extends LightningElement {
    handleClick() {
        let msg = {
            type: "Click",
            action:"Approve"
        }
        log(msg);
        console.log(JSON.stringify(msg));
    }
}