!function(e){var t=inlineEditPost.edit;inlineEditPost.edit=function(i){t.apply(this,arguments);var n=0;if("object"==typeof i&&(n=parseInt(this.getId(i))),n>0){var a=[],c=[];checkbox=jQuery('.data input[type="checkbox"]'),jQuery.each(checkbox,function(t,i){a.push(e(this).attr("data-id"))});var d=[];e.each(a,function(t,i){-1===e.inArray(i,d)&&d.push(i)}),jQuery.each(d,function(t,i){var a=e("#form\\["+i+"\\]");a.attr("data-style")==n?(a.prop("checked",!0),a.parent().parent().next().hide()):(a.prop("checked",!1),a.parent().parent().next().show()),e(".cf7-quick-edit .hidden-fields").html(""),a.is(":checked")&&(c.push(a.attr("data-id")),a.on("click",function(){a.prop("checked")?e("#remove-form\\["+a.attr("data-id")+"\\]").remove():e(".cf7-quick-edit .hidden-fields").append('<input type="hidden" name="remove-'+a.attr("id")+'" id="remove-'+a.attr("id")+'" value="on">')}))})}},e(".inline-edit-cf7_style .button-primary").on("click",function(){var t=window.location.href;e(".cf7-quick-edit").load(t+" .cf7-quick-edit >")})}(jQuery);