ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    let popupConfig = ubsApp.popupConfig;
	templateConfig =  $.extend(templateConfig, popupConfig);
    templateConfig.Close = ubsApp.getTranslation("Close");
    ubsApp.startCurrentScenario();
    document.getElementById("helpContent").style.opacity="1";
    document.getElementById("helpContent").style["background-color"] = "transparent";
	tempVar.html += ubsPopupTemplate(templateConfig);
	ubsApp.popupConfig = {};
}