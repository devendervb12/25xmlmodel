sap.ui.controller("z5table_xml.EmployeeTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z5table_xml.EmployeeTable
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.xml.XMLModel();
		oModel.loadData("model/employeeData.xml");
		
		this.getView().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf z5table_xml.EmployeeTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf z5table_xml.EmployeeTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf z5table_xml.EmployeeTable
*/
//	onExit: function() {
//
//	}

});