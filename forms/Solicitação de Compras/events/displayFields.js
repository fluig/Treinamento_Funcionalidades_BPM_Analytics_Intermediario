function displayFields(form,customHTML){
	var ATIV_ATUAL = getValue("WKNumState");
	
	var ATV_INICIO = 4;
	var ATV_APROV_GESTOR = 5;
	var ATV_APROV_FINANC = 11;
	
	customHTML.append("<script>");		
	customHTML.append("$(document).ready(function (){");
	
	if(ATIV_ATUAL == 0 || ATIV_ATUAL == ATV_INICIO){
		form.setValue("txt_solicitante", getDadosUsuario().getFullName());
		form.setValue("txt_solic_email", getDadosUsuario().getEmail());
		form.setValue("txt_dt_solic", dataAgora());

		customHTML.append("$(\"#panelAprovacao\").hide();");
	}
	
	if(ATIV_ATUAL == ATV_APROV_GESTOR){
		customHTML.append("$(\"#aprovacaoFinanceiro\").hide();");
		customHTML.append("$(\"#panelSolicitante label.obrigatorio span\").hide();");
	}

	customHTML.append("});");
	customHTML.append("</script>");
}

function getDadosUsuario(){
	return fluigAPI.getUserService().getCurrent();
}

function dataAgora(){
	return new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm").format(new java.util.Date());
}