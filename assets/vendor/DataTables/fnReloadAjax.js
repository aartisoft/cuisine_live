$=jQuery.noConflict();$.fn.dataTableExt.oApi.fnReloadAjax=function(oSettings,sNewSource,fnCallback,bStandingRedraw)
{if(sNewSource!==undefined&&sNewSource!==null){oSettings.sAjaxSource=sNewSource;}
if(oSettings.oFeatures.bServerSide){this.fnDraw();return;}
this.oApi._fnProcessingDisplay(oSettings,true);var that=this;var iStart=oSettings._iDisplayStart;var aData=[];this.oApi._fnServerParams(oSettings,aData);oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aData,function(json){that.oApi._fnClearTable(oSettings);var aData=(oSettings.sAjaxDataProp!=="")?that.oApi._fnGetObjectDataFn(oSettings.sAjaxDataProp)(json):json;for(var i=0;i<aData.length;i++)
{that.oApi._fnAddData(oSettings,aData[i]);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();that.fnDraw();if(bStandingRedraw===true)
{oSettings._iDisplayStart=iStart;that.oApi._fnCalculateEnd(oSettings);that.fnDraw(false);}
that.oApi._fnProcessingDisplay(oSettings,false);if(typeof fnCallback=='function'&&fnCallback!==null)
{fnCallback(oSettings);}},oSettings);};