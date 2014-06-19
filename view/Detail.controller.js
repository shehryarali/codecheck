sap.ui.controller("sap.ui.live.view.Detail", {

	onInit: function(evt) {
	},

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});