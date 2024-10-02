import { LightningElement, wire } from "lwc";
import {
  openTab,
  EnclosingTabId,
  openSubtab,
  getFocusedTabInfo,
  setTabLabel,
  setTabIcon,
  setTabHighlighted,
  getAllTabInfo,
  focusTab,
  disableTabClose
} from "lightning/platformWorkspaceApi";

export default class WorkSpaceAPIs extends LightningElement {
  @wire(EnclosingTabId) enclosingTabId;

  async openTab() {
    await openTab({
      pageReference: {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Contact",
          actionName: "list"
        }
      },
      focus: true,
      lable: "Contacts List"
    });
  }
  openSubTab() {
    openSubtab(this.enclosingTabId, {
      pageReference: {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Contact",
          actionName: "list"
        }
      }
    });
  }
  async changeLabel() {
    const { tabId } = await getFocusedTabInfo();
    setTabLabel(tabId, "Apex Hours");
  }
  async changeIcon() {
    const { tabId } = await getFocusedTabInfo();
    setTabIcon(tabId, "utility:animal_and_nature", {
      iconAlt: "Animal and Nature"
    });
  }

  async highlightTab() {
    const { tabId } = await getFocusedTabInfo();
    setTabHighlighted(tabId, true, {
      pulse: true,
      state: "warning"
    });
  }

  async nextTab() {
    const { tabId } = await getFocusedTabInfo();
    const allTabs = await getAllTabInfo();
    const selectedTabIndex = allTabs.findIndex(
      (possibleNextTab) => possibleNextTab.tabId === tabId
    );
    const nextTabId = allTabs[selectedTabIndex + 1].tabId;
    await focusTab(nextTabId);
  }

  async previousTab() {
    const { tabId } = await getFocusedTabInfo();
    const allTabs = await getAllTabInfo();
    const selectedTabIndex = allTabs.findIndex(
      (possibleNextTab) => possibleNextTab.tabId === tabId
    );
    const nextTabId = allTabs[selectedTabIndex - 1].tabId;
    await focusTab(nextTabId);
  }

  async disableTabClose() {
    const { tabId } = await getFocusedTabInfo();
    await disableTabClose(tabId, true);
  }
  async enableTabClose() {
    const { tabId } = await getFocusedTabInfo();
    await disableTabClose(tabId, false);
  }
}
