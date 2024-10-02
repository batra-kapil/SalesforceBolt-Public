import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class WorkspaceAPIsLauncher extends NavigationMixin(LightningElement) {
    openTab() {
        console.log('#####Navigate');
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Workspace_APIs'
            }
        });
    }
}