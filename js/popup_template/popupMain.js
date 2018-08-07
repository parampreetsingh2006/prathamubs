ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    let popupConfig = ubsApp.popupConfig;
	templateConfig =  $.extend(templateConfig, popupConfig);
    templateConfig.Close = ubsApp.getTranslation("Close");
    ubsApp.startCurrentScenario();

	tempVar.html += ubsPopupTemplate(templateConfig);
	ubsApp.popupConfig = {};
}