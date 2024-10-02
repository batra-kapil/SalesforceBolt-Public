import { LightningElement } from 'lwc';

export default class LightningRecordPicker extends LightningElement {
    targetObjects = [

      {
            label: 'Account',
            value: 'Account'
        },
        {
            label: 'Contact',
            value: 'Contact'
        }
    ];
    selectedTarget = 'Account';
    currentSelectedRecordId = null;

    displayInfos = {
        Account: {
            additionalFields: ['Type']
        },
        Contact: {
            additionalFields: ['Phone']
        }
    };

    matchingInfos = {
        Account: {
            additionalFields: [{ fieldPath: 'Type' }]
        },
        Contact: {
            additionalFields: [{ fieldPath: 'Phone' }]
        }
    };

    get displayInfo() {
        return this.displayInfos[this.selectedTarget];
    }

    get matchingInfo() {
        return this.matchingInfos[this.selectedTarget];
    }

    get showTargetSelector() {
        return this.currentSelectedRecordId === null;
    }

    handleTargetSelection(event) {
        // Prevent lightning-combobox `change` event from bubbling
        event.stopPropagation();

        this.selectedTarget = event.target.value;
        this.refs.recordPicker.clearSelection();
    }

    handleRecordSelect(event) {
        this.currentSelectedRecordId = event.detail.recordId;
        console.log("🚀 ~ this.currentSelectedRecordId:", this.currentSelectedRecordId);
    }
}