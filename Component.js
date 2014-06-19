jQuery.sap.declare("sap.ui.live.Component");

sap.ui.core.UIComponent.extend("sap.ui.live.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.live.view.App",
			type : "JS",
//			viewData : { component : this }
		});

		// set data model on root view

/*		var oModel = new sap.ui.model.json.JSONModel();
		var aData = jQuery.ajax({
                url: "http://94.200.34.179:50000/test/zsurvey?token=F12D86D9B88E596C02A3495F1294D24E&format=json&lowercase=X",  // for different servers cross-domain restrictions need to be handled
                dataType: "json",
                success: function(data, textStatus, jqXHR) { // callback called when data is received
                    var JsonData = data;
                    oModel.setData(JsonData);  // fill the received data into the JSONModel
                    alert("sparta");
                },
                error: function(jqXHR, textStatus, errorThrown) {
                      alert("error");
                }
            });

		oView.setModel(oModel, "MyData");
*/
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});