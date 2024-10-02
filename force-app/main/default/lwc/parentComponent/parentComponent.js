import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    
    childData = { percentage: 20, name: 'Kapil' };

    handleonchange(event){
        this.childData = { percentage: event.target.value };
    }
}