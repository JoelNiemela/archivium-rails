function br() {
	return document.createElement("br");
}

function addTextFieldToForm() {
	var name = document.getElementById("new_field_name").value;
	var text = document.getElementById("new_field_text").value;
	var fields_div = document.getElementById("fields_div");
	var div = document.createElement("div");
	div.id = "data_feilds[" + (fields_div.childElementCount) + "]";
	var hr = document.createElement("hr");
	hr.classList.add("hr-wide");
	var time = document.createElement("div");
	time.id = "time_frame_span[" + (fields_div.childElementCount) +"]"
	time.style.cssText = "display: none";
	var time_start_label = document.createElement("label");
	time_start_label.innerHTML = "Start: ";
	var time_start = document.createElement("input");
	time_start.name = "obj[data_feilds_time_start][][0]"
	time_start.classList.add("input");
	time_start.classList.add("input-sm");
	time_start.type = "number";
	var time_end_label = document.createElement("label");
	time_end_label.innerHTML = "End:\xa0\xa0\xa0";
	var time_end = document.createElement("input");
	time_end.name = "obj[data_feilds_time_end][][0]"
	time_end.classList.add("input");
	time_end.classList.add("input-sm");
	time_end.type = "number";
	var type = document.createElement("input");
	type.value = "text";
	type.name = "obj[data_feilds_type][][0]";
	type.type = "hidden";
	var input_label = document.createElement("label");
	input_label.innerHTML = "Name";
	var input = document.createElement("input");
	input.value = name;
	input.name = "obj[data_feilds_name][][0]";
	input.classList.add("input");
	var textarea_label = document.createElement("label");
	textarea_label.innerHTML = "Text";
	var textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.name = "obj[data_feilds_value][][0]";
	textarea.classList.add("textarea");
	var checkbox_label = document.createElement("label");
	checkbox_label.innerHTML = "Enable time frames";
	var checkbox_default = document.createElement("input");
	checkbox_default.type = "hidden";
	checkbox_default.name = "obj[data_feilds_time][]";
	checkbox_default.value = "off";
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "obj[data_feilds_time][]";
	checkbox.value = "on";
	checkbox.setAttribute("onclick", "toggleElementDisplay('time_frame_span[" + (fields_div.childElementCount) + "]');");
	
	time.appendChild(time_start_label);
	time.appendChild(time_start);
	time.appendChild(br());
	time.appendChild(time_end_label);
	time.appendChild(time_end);
	time.appendChild(br());
	
	div.appendChild(hr);
	div.appendChild(br());
	div.appendChild(time);
	div.appendChild(type);
	div.appendChild(input_label);
	div.appendChild(br());
	div.appendChild(input);
	div.appendChild(br());
	div.appendChild(textarea_label);
	div.appendChild(br());
	div.appendChild(textarea);
	div.appendChild(br());
	div.appendChild(checkbox_label);
	div.appendChild(br());
	div.appendChild(checkbox_default);
	div.appendChild(checkbox);
	div.appendChild(br());
	fields_div.appendChild(div);
}

function addLinkFieldToForm() {
	var name = document.getElementById("new_link_field_name").value;
	var form_select = document.getElementById("new_link_field_obj");
	var fields_div = document.getElementById("fields_div");
	var div = document.createElement("div");
	div.id = "data_feilds[" + (fields_div.childElementCount) + "]";
	var hr = document.createElement("hr");
	hr.classList.add("hr-wide");
	var type = document.createElement("input");
	type.value = "link";
	type.name = "obj[data_feilds_type][][0]"
	type.type = "hidden";
	var time = document.createElement("div");
	time.id = "time_frame_span[" + (fields_div.childElementCount) +"]"
	time.style.cssText = "display: none";
	var time_start_label = document.createElement("label");
	time_start_label.innerHTML = "Start: ";
	var time_start = document.createElement("input");
	time_start.name = "obj[data_feilds_time_start][][0]"
	time_start.classList.add("input");
	time_start.classList.add("input-sm");
	time_start.type = "number";
	var time_end_label = document.createElement("label");
	time_end_label.innerHTML = "End:\xa0\xa0\xa0";
	var time_end = document.createElement("input");
	time_end.name = "obj[data_feilds_time_end][][0]"
	time_end.classList.add("input");
	time_end.classList.add("input-sm");
	time_end.type = "number";
	var input_label = document.createElement("label");
	input_label.innerHTML = "Name";
	var input = document.createElement("input");
	input.value = name;
	input.name = "obj[data_feilds_name][][0]"
	input.classList.add("input");
	var select_label = document.createElement("label");
	select_label.innerHTML = "Link";
	var select = document.createElement("select");
	select.name = "obj[data_feilds_value][][0]";
	select.classList.add("select");
	select.classList.add("select-wide");
	var checkbox_label = document.createElement("label");
	checkbox_label.innerHTML = "Enable time frames";
	var checkbox_default = document.createElement("input");
	checkbox_default.type = "hidden";
	checkbox_default.name = "obj[data_feilds_time][]";
	checkbox_default.value = "off";
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "obj[data_feilds_time][]";
	checkbox.value = "on";
	checkbox.setAttribute("onclick", "toggleElementDisplay('time_frame_span[" + (fields_div.childElementCount) + "]');");
	
	for (var i = 0; i < form_select.options.length; i++) {
		var option = document.createElement("option");
		option.text = form_select.options[i].text;
		option.value = form_select.options[i].value;
		option.selected = form_select.options[i].selected;
		
		select.appendChild(option);
	}
	
	time.appendChild(time_start_label);
	time.appendChild(time_start);
	time.appendChild(br());
	time.appendChild(time_end_label);
	time.appendChild(time_end);
	time.appendChild(br());
	
	div.appendChild(hr);
	div.appendChild(br());
	div.appendChild(time);
	div.appendChild(type);
	div.appendChild(input_label);
	div.appendChild(br());
	div.appendChild(input);
	div.appendChild(br());
	div.appendChild(select_label);
	div.appendChild(br());
	div.appendChild(select);
	div.appendChild(br());
	div.appendChild(checkbox_label);
	div.appendChild(br());
	div.appendChild(checkbox_default);
	div.appendChild(checkbox);
	div.appendChild(br());
	fields_div.appendChild(div);
}

function getSelectOptions(hash) {
	return hash[document.getElementById('obj_universe_id').value];
}

function setOptions(selectId, options) {
	var select = document.getElementById(selectId);
	while (select.lastChild) {
	    select.removeChild(select.lastChild);
	}
	for (var i = 0; i < options.length; i++) {
		var option = document.createElement("option");
		option.text = options[i][0];
		option.value = options[i][1];
		select.appendChild(option);
	}
	if (options.length == 0) {
		var option = document.createElement("option");
		option.text = "There are no objects in this universe";
		option.disabled = true;
		select.appendChild(option);
	}
}