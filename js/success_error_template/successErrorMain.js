ubsApp.getSuccessErrorTemplate = function(templateConfig, tempVar){
	templateConfig.errorPage = ubsApp.errorPage;
    templateConfig.successErrorMessage = ubsApp.successErrorMessage;
    if(ubsApp.successErrorMessageHeader) {
        templateConfig.header = ubsApp.successErrorMessageHeader
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
}