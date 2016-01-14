/*----------------------------------------------------------------------------------|  www.giz.de  |----/
	Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb 
/-------------------------------------------------------------------------------------------------------/

	@version		3.3.0
	@build			14th January, 2016
	@created		15th June, 2012
	@package		Cost Benefit Projection
	@subpackage		company.js
	@author			Llewellyn van der Merwe <http://www.vdm.io>	
	@owner			Deutsche Gesellschaft für International Zusammenarbeit (GIZ) Gmb
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html
	
/-------------------------------------------------------------------------------------------------------/
	Cost Benefit Projection Tool.
/------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_rVlgHfNvak_required = false;
jform_rVlgHfNCAd_required = false;
jform_rVlgHfNZmt_required = false;
jform_rVlgHfNraQ_required = false;
jform_rVlgHfNByX_required = false;
jform_rVlgHfNMir_required = false;
jform_rVlgHfNlaW_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var department_rVlgHfN = jQuery("#jform_department input[type='radio']:checked").val();
	rVlgHfN(department_rVlgHfN);

	var department_otRDwfE = jQuery("#jform_department input[type='radio']:checked").val();
	otRDwfE(department_otRDwfE);
});

// the rVlgHfN function
function rVlgHfN(department_rVlgHfN)
{
	// set the function logic
	if (department_rVlgHfN == 2)
	{
		jQuery('#jform_causesrisks').closest('.control-group').show();
		if (jform_rVlgHfNvak_required)
		{
			updateFieldRequired('causesrisks',0);
			jQuery('#jform_causesrisks').prop('required','required');
			jQuery('#jform_causesrisks').attr('aria-required',true);
			jQuery('#jform_causesrisks').addClass('required');
			jform_rVlgHfNvak_required = false;
		}

		jQuery('#jform_percentfemale').closest('.control-group').show();
		jQuery('#jform_percentmale').closest('.control-group').show();
		jQuery('#jform_productivity_losses').closest('.control-group').show();
		if (jform_rVlgHfNCAd_required)
		{
			updateFieldRequired('productivity_losses',0);
			jQuery('#jform_productivity_losses').prop('required','required');
			jQuery('#jform_productivity_losses').attr('aria-required',true);
			jQuery('#jform_productivity_losses').addClass('required');
			jform_rVlgHfNCAd_required = false;
		}

		jQuery('#jform_medical_turnovers_females').closest('.control-group').show();
		if (jform_rVlgHfNZmt_required)
		{
			updateFieldRequired('medical_turnovers_females',0);
			jQuery('#jform_medical_turnovers_females').prop('required','required');
			jQuery('#jform_medical_turnovers_females').attr('aria-required',true);
			jQuery('#jform_medical_turnovers_females').addClass('required');
			jform_rVlgHfNZmt_required = false;
		}

		jQuery('#jform_medical_turnovers_males').closest('.control-group').show();
		if (jform_rVlgHfNraQ_required)
		{
			updateFieldRequired('medical_turnovers_males',0);
			jQuery('#jform_medical_turnovers_males').prop('required','required');
			jQuery('#jform_medical_turnovers_males').attr('aria-required',true);
			jQuery('#jform_medical_turnovers_males').addClass('required');
			jform_rVlgHfNraQ_required = false;
		}

		jQuery('#jform_sick_leave_females').closest('.control-group').show();
		if (jform_rVlgHfNByX_required)
		{
			updateFieldRequired('sick_leave_females',0);
			jQuery('#jform_sick_leave_females').prop('required','required');
			jQuery('#jform_sick_leave_females').attr('aria-required',true);
			jQuery('#jform_sick_leave_females').addClass('required');
			jform_rVlgHfNByX_required = false;
		}

		jQuery('#jform_sick_leave_males').closest('.control-group').show();
		if (jform_rVlgHfNMir_required)
		{
			updateFieldRequired('sick_leave_males',0);
			jQuery('#jform_sick_leave_males').prop('required','required');
			jQuery('#jform_sick_leave_males').attr('aria-required',true);
			jQuery('#jform_sick_leave_males').addClass('required');
			jform_rVlgHfNMir_required = false;
		}

		jQuery('#jform_total_healthcare').closest('.control-group').show();
		if (jform_rVlgHfNlaW_required)
		{
			updateFieldRequired('total_healthcare',0);
			jQuery('#jform_total_healthcare').prop('required','required');
			jQuery('#jform_total_healthcare').attr('aria-required',true);
			jQuery('#jform_total_healthcare').addClass('required');
			jform_rVlgHfNlaW_required = false;
		}

	}
	else
	{
		jQuery('#jform_causesrisks').closest('.control-group').hide();
		if (!jform_rVlgHfNvak_required)
		{
			updateFieldRequired('causesrisks',1);
			jQuery('#jform_causesrisks').removeAttr('required');
			jQuery('#jform_causesrisks').removeAttr('aria-required');
			jQuery('#jform_causesrisks').removeClass('required');
			jform_rVlgHfNvak_required = true;
		}
		jQuery('#jform_percentfemale').closest('.control-group').hide();
		jQuery('#jform_percentmale').closest('.control-group').hide();
		jQuery('#jform_productivity_losses').closest('.control-group').hide();
		if (!jform_rVlgHfNCAd_required)
		{
			updateFieldRequired('productivity_losses',1);
			jQuery('#jform_productivity_losses').removeAttr('required');
			jQuery('#jform_productivity_losses').removeAttr('aria-required');
			jQuery('#jform_productivity_losses').removeClass('required');
			jform_rVlgHfNCAd_required = true;
		}
		jQuery('#jform_medical_turnovers_females').closest('.control-group').hide();
		if (!jform_rVlgHfNZmt_required)
		{
			updateFieldRequired('medical_turnovers_females',1);
			jQuery('#jform_medical_turnovers_females').removeAttr('required');
			jQuery('#jform_medical_turnovers_females').removeAttr('aria-required');
			jQuery('#jform_medical_turnovers_females').removeClass('required');
			jform_rVlgHfNZmt_required = true;
		}
		jQuery('#jform_medical_turnovers_males').closest('.control-group').hide();
		if (!jform_rVlgHfNraQ_required)
		{
			updateFieldRequired('medical_turnovers_males',1);
			jQuery('#jform_medical_turnovers_males').removeAttr('required');
			jQuery('#jform_medical_turnovers_males').removeAttr('aria-required');
			jQuery('#jform_medical_turnovers_males').removeClass('required');
			jform_rVlgHfNraQ_required = true;
		}
		jQuery('#jform_sick_leave_females').closest('.control-group').hide();
		if (!jform_rVlgHfNByX_required)
		{
			updateFieldRequired('sick_leave_females',1);
			jQuery('#jform_sick_leave_females').removeAttr('required');
			jQuery('#jform_sick_leave_females').removeAttr('aria-required');
			jQuery('#jform_sick_leave_females').removeClass('required');
			jform_rVlgHfNByX_required = true;
		}
		jQuery('#jform_sick_leave_males').closest('.control-group').hide();
		if (!jform_rVlgHfNMir_required)
		{
			updateFieldRequired('sick_leave_males',1);
			jQuery('#jform_sick_leave_males').removeAttr('required');
			jQuery('#jform_sick_leave_males').removeAttr('aria-required');
			jQuery('#jform_sick_leave_males').removeClass('required');
			jform_rVlgHfNMir_required = true;
		}
		jQuery('#jform_total_healthcare').closest('.control-group').hide();
		if (!jform_rVlgHfNlaW_required)
		{
			updateFieldRequired('total_healthcare',1);
			jQuery('#jform_total_healthcare').removeAttr('required');
			jQuery('#jform_total_healthcare').removeAttr('aria-required');
			jQuery('#jform_total_healthcare').removeClass('required');
			jform_rVlgHfNlaW_required = true;
		}
	}
}

// the otRDwfE function
function otRDwfE(department_otRDwfE)
{
	// set the function logic
	if (department_otRDwfE == 1)
	{
		jQuery('.age_groups_note').closest('.control-group').show();
		jQuery('.cause_risk_selection_note').closest('.control-group').show();
	}
	else
	{
		jQuery('.age_groups_note').closest('.control-group').hide();
		jQuery('.cause_risk_selection_note').closest('.control-group').hide();
	}
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
}

jQuery(document).ready(function()
{    
    var values_a = jQuery('#jform_percentmale').val();
	if (values_a)
	{
		values_a = jQuery.parseJSON(values_a);
		buildTable(values_a,'jform_percentmale');
	}

    var values_b = jQuery('#jform_percentfemale').val();
    if (values_b)
	{
		values_b = jQuery.parseJSON(values_b);
    	buildTable(values_b,'jform_percentfemale');
	}
});

function buildTable(array,id){
	jQuery('#table_'+id).remove();
	jQuery('#'+id).closest('.control-group').append('<table style="margin: 5px 0 20px;" class="table" id="table_'+id+'">');
	jQuery('#table_'+id).append(tableHeader(array));
	jQuery('#table_'+id).append(tableBody(array));  
	jQuery('#table_'+id).append('</table>');
}

function tableHeader(array)
{
  var header = '<thead><tr>';
	jQuery.each(array, function(key, value) {
		 header += '<th style="padding: 10px; text-align: center; border: 1px solid rgb(221, 221, 221);">'+capitalizeFirstLetter(key)+'</th>';
	});
	header += '</tr></thead>';
  return header;
}

function tableBody(array)
{
	var body = '<tbody>';
	var rows = new Array();
	jQuery.each(array, function(key, value) {
		jQuery.each(value, function(i, line) {
      if( rows[i] === undefined ) {
        rows[i] = '<td style="padding: 10px; text-align: center; border: 1px solid rgb(221, 221, 221);">' + line + '</td>';
      }
      else
      {
        rows[i] = rows[i] + '<td style="padding: 10px; text-align: center; border: 1px solid rgb(221, 221, 221);">' + line + '</td>';
      }
		});
	});
  // now load to body the rows
  jQuery.each(rows, function(a, row) {
     body += '<tr>' + row + '</tr>';
	});
  
	body += '</tbody>';
  
  return body;
                              
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateSelection(row)
{
	var groupId = jQuery(row).find("select:first").attr("id");
	var percentValue = jQuery(row).find(".text_area:first").val();
	var arr = groupId.split('-');
	if (arr[1] != 1)
	{
		var selection = {};
		jQuery(row).find("select:first option").each(function()
		{
			// first get the values and text
			selection[jQuery(this).text()] = jQuery(this).val();
		});
		jQuery.each(AgeGroup, function(i, group){
			jQuery(row).find("select:first option[value='"+group+"']").remove();
		});
		if (percentValue)
		{
			var text = jQuery(row).find(".chzn-single:first span").text();
			jQuery(row).find("select:first").append(jQuery('<option>', {
				value: selection[text],
				text: text
			}));
		}
		jQuery(row).find("select:first").trigger("liszt:updated");	
		
		if (percentValue)
		{
			jQuery(row).find("select:first option:selected").val(selection[text]);	
			jQuery(row).find(".chzn-single:first span").text(text);
		}
	}
} 