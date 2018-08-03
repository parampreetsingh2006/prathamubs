ubsApp.getPopupTemplate = function(templateConfig, tempVar){
    let popupConfig = ubsApp.popupConfig;
	templateConfig.headerStyle = popupConfig.headerStyle;
    templateConfig.message = popupConfig.message;
    templateConfig.Close = ubsApp.getTranslation("Close");
    if(ubsApp.successErrorMessageHeader) {
        templateConfig.header = ubsApp.successErrorMessageHeader;
    } else if(templateConfig.errorPage) {
        templateConfig.header = templateConfig.ERROR;
    } else {
        templateConfig.header = templateConfig.SUCCESS;
    }
    $('#monopolyBase').css("z-index",-10);
        $('#templateBase').css("z-index",10);

        document.getElementById("templateContent").style.opacity="0.95";

        $('#templateContent').css("height",(screenHeight)+'px');
        $('#templateContent').css("width",(screenWidth)+'px');

	tempVar.html += ubsSuccessErrortemplate(templateConfig);
	ubsApp.popupConfig = {};
}