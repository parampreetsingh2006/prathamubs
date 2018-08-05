ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    let popupConfig = ubsApp.popupConfig;
	templateConfig.headerStyle = popupConfig.headerStyle;
    templateConfig.message = popupConfig.message;
    templateConfig.Close = ubsApp.getTranslation("Close");
    templateConfig.header = popupConfig.header;
    ubsApp.startCurrentScenario();

	tempVar.html += ubsPopupTemplate(templateConfig);
	ubsApp.popupConfig = {};
}