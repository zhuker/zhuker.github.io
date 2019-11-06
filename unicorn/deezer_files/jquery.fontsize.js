jQuery.fn.fontresizermanager = function () {
	if (jQuery('#inofontResizer_element, #inofontResizer_instance,#inofontResizer_resizeSteps,#inofontResizer_cookieTime').length == 0) return;
    var inofontResizer_element = jQuery('#inofontResizer_element').val().toString();
	var inofontResizer_instance = jQuery('#inofontResizer_instance').val().toString();
    var inofontResizer_resizeSteps = jQuery('#inofontResizer_resizeSteps').val();
    var inofontResizer_cookieTime = jQuery('#inofontResizer_cookieTime').val();
	
	var startFontSize = parseFloat(jQuery(inofontResizer_element).css("font-size"));
	var startLineHeight = parseFloat(jQuery(inofontResizer_element).css("line-height"));
	if ( inofontResizer_instance == 'undefined' || inofontResizer_instance == '' ) { inofontResizer_instance = 'inofontsize'; }
	
	var savedSize = jQuery.cookie(inofontResizer_instance + 'fontsize');
	var savedlineheight = jQuery.cookie(inofontResizer_instance + 'lineheight');
	
	if(savedSize > 4) {
		jQuery(inofontResizer_element).css("font-size", savedSize + "px");
		jQuery(inofontResizer_element).css("line-height", savedlineheight + "px");
	}
	jQuery('.inofontResizer_add,.inofontResizer_minus,.inofontResizer_reset').css("cursor","pointer");
	jQuery('.inofontResizer_add,.inofontResizer_minus').click(function() {
		var newFontSize = parseFloat(jQuery(inofontResizer_element).css("font-size"));
		var newLineHeight = parseFloat(jQuery(inofontResizer_element).css("line-height"));
		if( jQuery(this).hasClass('inofontResizer_add') )
		{
			newFontSize=newFontSize+parseFloat(inofontResizer_resizeSteps);
			newLineHeight=newLineHeight+parseFloat(inofontResizer_resizeSteps);
		}
		else
		{
			newFontSize=newFontSize-parseFloat(inofontResizer_resizeSteps);
			newLineHeight=newLineHeight-parseFloat(inofontResizer_resizeSteps);
		}
		jQuery(inofontResizer_element).css("font-size",newFontSize+"px");
		jQuery(inofontResizer_element).css("line-height",newLineHeight+"px");
		jQuery.cookie(inofontResizer_instance + 'fontsize', newFontSize, {expires: parseInt(inofontResizer_cookieTime), path: '/'});
		jQuery.cookie(inofontResizer_instance + 'lineheight', newLineHeight, {expires: parseInt(inofontResizer_cookieTime), path: '/'});
	});
	jQuery('.inofontResizer_reset').click(function() {
		jQuery(inofontResizer_element).css("font-size",parseFloat(startFontSize)+"px");
		jQuery(inofontResizer_element).css("line-height",parseFloat(startLineHeight)+"px");	
		jQuery.cookie(inofontResizer_instance + 'fontsize', startFontSize, {expires: parseInt(inofontResizer_cookieTime), path: '/'});
		jQuery.cookie(inofontResizer_instance + 'lineheight', startLineHeight, {expires: parseInt(inofontResizer_cookieTime), path: '/'});
	});
}

jQuery(document).ready(function(){
	jQuery(".inofontResizer").fontresizermanager();
});

