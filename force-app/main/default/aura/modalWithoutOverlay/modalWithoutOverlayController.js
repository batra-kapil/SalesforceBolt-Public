({
    showModel: function (component, event, helper) {
        console.log('###Testing');
      component.set("v.showModal", true);
   },
  
   hideModel: function(component, event, helper) {
      component.set("v.showModal", false);
   },
  
   saveDetails: function(component, event, helper) {
      component.set("v.showModal", false);
   },
})