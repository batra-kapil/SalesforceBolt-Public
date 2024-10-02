import { LightningElement } from 'lwc';

export default class LightningRecordPickerStatic extends LightningElement {
    selectedRecordId = '';

    matchingInfo = {
        primaryField: { fieldPath: "Name" },
        additionalFields: [{ fieldPath: "Title" }],
    };
    displayInfo = {
        additionalFields: ["Title"],
    };

    filter = {
        criteria: [
            {
                fieldPath: "Account.Name",
                operator: "like",
                value: "Kapil%",
            },
        ],
    };
    handleChange(event) {
        this.selectedRecordId = event.detail.recordId;
        console.log("🚀 ~ this.selectedRecordId:", this.selectedRecordId);
    }
}