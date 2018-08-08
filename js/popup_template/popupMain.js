ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    let popupConfig = ubsApp.popupConfig;
	templateConfig =  $.extend(templateConfig, popupConfig);
    templateConfig.Close = ubsApp.getTranslation("Close");
    ubsApp.startCurrentScenario();
    document.getElementById("templateContent").style.opacity="1";
    document.getElementById("templateContent").style["background-color"] = "transparent";
	tempVar.html += ubsPopupTemplate(templateConfig);
	ubsApp.popupConfig = {};
}