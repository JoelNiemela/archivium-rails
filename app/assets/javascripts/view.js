// view.js
function toggleElementVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

function toggleElementsVisibility(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementVisibility(ids[i]);
	}
}

function toggleElementDisplay(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplay(ids) {
    for (var i = 0; i < ids.length; i++) {
		toggleElementDisplay(ids[i]);
	}
}

function toggleElementDisplayInlineBlock(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "inline-block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplayInlineBlock(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementsDisplayInlineBlock(ids[i]);
	}	
}

// sidebar.js
function openSideBar(id) {
    document.getElementById(id).style.width = "250px";
}

function closeSideBar(id) {
    document.getElementById(id).style.width = "0px";
}

// form.js
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
	time_start_label.innerHTML = "Start:\xa0";
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
	type.name = "obj[data_feilds_type][]";
	type.type = "hidden";
	
	var input_label = document.createElement("label");
	input_label.innerHTML = "Name";
	var input = document.createElement("input");
	input.value = name;
	input.name = "obj[data_feilds_name][]";
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
	type.name = "obj[data_feilds_type][]"
	type.type = "hidden";
	
	var time = document.createElement("div");
	time.id = "time_frame_span[" + (fields_div.childElementCount) +"]"
	time.style.cssText = "display: none";
	
	var time_start_label = document.createElement("label");
	time_start_label.innerHTML = "Start:\xa0";
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
	input.name = "obj[data_feilds_name][]"
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

function addTabToForm() {
    var tabs_div = document.getElementById("tabs_divs");
    
    var tabId = (tabs_div.childElementCount);
    
    var tabDiv = document.createElement("div");
    tabDiv.id = "tabs[" + tabId + "]";
    
    var nameInput = document.createElement("input");
    nameInput.id = "tabs_name[" + tabId + "]";
    nameInput.name = "obj[tabs][" + tabId + "][name]";
    nameInput.classList.add("input");
    nameInput.value = document.getElementById("new_tab_name").value;
    
    var move_up_tab_button = document.createElement("input");
    move_up_tab_button.type = "button";
    move_up_tab_button.id = "move_up_tab_button[" + tabId + "]";
    move_up_tab_button.name = "commit";
    move_up_tab_button.value = "🠱 Move tab";
    move_up_tab_button.classList.add("btn");
    move_up_tab_button.classList.add("btn-xs");
    move_up_tab_button.classList.add("color-white");
    move_up_tab_button.setAttribute("onclick", "moveTabUp(" + tabId + ");");
    
    var delete_tab_button = document.createElement("input");
    delete_tab_button.type = "button";
    delete_tab_button.id = "delete_tab_button[" + tabId + "]";
    delete_tab_button.name = "commit";
    delete_tab_button.value = "Delete tab";
    delete_tab_button.classList.add("btn");
    delete_tab_button.classList.add("btn-xs");
    delete_tab_button.classList.add("color-danger");
    delete_tab_button.setAttribute("onclick", "deleteTab(" + tabId + ");");
    
    var move_down_tab_button = document.createElement("input");
    move_down_tab_button.type = "button";
    move_down_tab_button.id = "move_down_tab_button[" + tabId + "]";
    move_down_tab_button.name = "commit";
    move_down_tab_button.value = "Move tab 🠳";
    move_down_tab_button.classList.add("btn");
    move_down_tab_button.classList.add("btn-xs");
    move_down_tab_button.classList.add("color-white");
    move_down_tab_button.setAttribute("onclick", "moveTabDown(" + tabId + ");");
    
    var fields_divs = document.createElement("div");
    fields_divs.id = "fields_divs[" + tabId + "]";
    fields_divs.classList.add("feild-frame-container");
    fields_divs.classList.add("well");
    
    tabDiv.appendChild(nameInput);
    tabDiv.appendChild(br());
    tabDiv.appendChild(move_up_tab_button);
    tabDiv.appendChild(delete_tab_button);
    tabDiv.appendChild(move_down_tab_button);
    tabDiv.appendChild(fields_divs);
    
    tabs_div.appendChild(tabDiv);
}

function addFieldToForm(type) {
    console.log("adding feild");
    
    var tab_select_id = "";
    if (type == "text") {
        tab_select_id = "new_field_tab";
    } else if (type == "link") {
        tab_select_id = "new_link_field_tab";
    }
    var tab_id = document.getElementById(tab_select_id).value;
    
    var time_frame_id = 0;
    
    console.log(tab_select_id);
    
    console.log(tab_id);
    
    console.log(time_frame_id);
    
    var i = (document.getElementById("fields_divs[" + tab_id + "]").childElementCount)-5+1;
    
    console.log(i);
    
    var data_header_span =
    "<div id=\"data_header_span[" + tab_id + "][" + i + "]\">" +
        "<hr class=\"size-fullwidth\"> <br>" +
        "<input id=\"feilds_type[" + tab_id + "][" + i + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][type]\" type=\"hidden\" value=\"" + type + "\">" +
        "<label>Name</label> <br>" +
        "<input id=\"feilds_name[" + tab_id + "][" + i + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][name]\" class=\"input size-fullwidth\" value=\"\"> <br>" +
    "</div>";
    
    var time_frame_span =
    "<div id=\"time_frame_span[" + tab_id + "][" + i + "][" + time_frame_id + "]\" style=\"display: none\">" +
        "<input type=\"button\" name=\"commit\" value=\"Previous Timeframe\" class=\"btn size-halfwidth float-left\" id=\"previous_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"previousTimeFrame(" + tab_id + ", " + i + ", " + time_frame_id + ");\" data-disable-with=\"Previous Timeframe\"> <input type=\"button\" name=\"commit\" value=\"Next Timeframe\" class=\"btn size-halfwidth float-left\" id=\"next_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"nextTimeFrame(" + tab_id + ", " + i + ", " + time_frame_id + ");\" data-disable-with=\"Next Timeframe\"> <br>" +
        "<input type=\"button\" name=\"commit\" value=\"Add Timeframe\" class=\"btn size-fullwidth float-left\" id=\"add_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"addTimeFrame(" + tab_id + ", " + i + ", " + time_frame_id + ", 'text');\" data-disable-with=\"Add Timeframe\"> <br>" +
        "<span id=\"time_frame_number[" + tab_id + "][" + i + "][" + time_frame_id + "]\">Timeframe 1:</span><br>" +
        "<div class=\"group-micro\">" +
            "<label>Start:&nbsp;</label> <input id=\"time_frame_start[" + tab_id + "][" + i + "][" + time_frame_id + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][frames][" + time_frame_id + "][time][start]\" class=\"input input-sm\" type=\"number\" value=\"\"> <br>" +
	        "<label>End:&nbsp;&nbsp;&nbsp;</label> <input id=\"time_frame_end[" + tab_id + "][" + i + "][" + time_frame_id + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][frames][" + time_frame_id + "][time][end]\" class=\"input input-sm\" type=\"number\" value=\"\"> <br>" +
            "<input type=\"button\" name=\"commit\" value=\"🠰 Move frame\" class=\"btn btn-xs color-white\" id=\"move_left_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"moveTimeFrameLeft(" + tab_id + ", " + i + ", " + time_frame_id + ")\" data-disable-with=\"🠰 Move frame\">" +
            "<input type=\"button\" name=\"commit\" value=\"Delete frame\" class=\"btn btn-xs color-danger\" id=\"delete_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"deleteTimeFrame(" + tab_id + ", " + i + ", " + time_frame_id + ")\" data-disable-with=\"Delete frame\">" +
            "<input type=\"button\" name=\"commit\" value=\"Move frame 🠲\" class=\"btn btn-xs color-white\" id=\"move_right_time_frame_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"moveTimeFrameRight(" + tab_id + ", " + i + ", " + time_frame_id + ")\" data-disable-with=\"Move frame 🠲\">" +
        "</div>" +
    "</div>";

    var time_frame_value_area = "";
    if (type == "text") {
        time_frame_value_area =
        "<label>Text</label> <br>" +
        "<textarea id=\"time_frame_value[" + tab_id + "][" + i + "][" + time_frame_id + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][frames][" + time_frame_id + "][value]\" class=\"textarea textarea-vertical size-fullwidth\"></textarea> <br>" +
        "<div id=\"text_area_markup_editor[" + tab_id + "][" + i + "][" + time_frame_id + "]\" style=\"display: none\">" +
            "<input type=\"button\" name=\"commit\" value=\"Insert link\" class=\"btn color-primary\" id=\"insert_link_button[" + tab_id + "][" + i + "][" + time_frame_id + "]\" onclick=\"insertText('time_frame_value[" + tab_id + "][" + i + "][" + time_frame_id + "]', document.getElementById('markup_editor_new_link[" + tab_id + "][" + i + "][" + time_frame_id + "]').value)\" data-disable-with=\"Insert link\">" +
            "<select id=\"markup_editor_new_link[" + tab_id + "][" + i + "][" + time_frame_id + "]\" class=\"select size-narrow\">" +
                "WIP" +
            "</select> <br>" +
        "</div>" +
        "<label>Show markup editor</label> <br>" +
        "<input type=\"checkbox\" onclick=\"toggleElementDisplay('text_area_markup_editor[" + tab_id + "][" + i + "][" + time_frame_id + "]');\">";
    } else if (type == "link") {
        time_frame_value_area =
        "<label>Link</label> <br>" +
        "<select id=\"time_frame_value[" + tab_id + "][" + i + "][" + time_frame_id + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][frames][" + time_frame_id + "][value]\" class=\"select size-fullwidth\">" +
            "WIP" +
        "</select> <br>";
    }
    
    var time_frame =
    "<div id=\"time_frame[" + tab_id + "][" + i + "][" + time_frame_id + "]\" style=\"display: block\">" +
        time_frame_span +
        time_frame_value_area +
    "</div>";

    var time_frames =
    "<div id=\"time_frames[" + tab_id + "][" + i + "]\">" +
        time_frame +
    "</div>";

    var data_footer_span =
    "<div id=\"data_footer_span[" + tab_id + "][" + i + "]\">" +
        "<label>Enable time frames</label> <br>" +
        "<input type=\"hidden\" id=\"time_frames_default[" + tab_id + "][" + i + "]\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][time]\" value=\"on\">" +
        "<input type=\"checkbox\" name=\"obj[tabs][" + tab_id + "][feilds][" + i + "][time]\" id=\"toggle_time_frames_checkbox[" + tab_id + "][" + i + "]\" value=\"on\" onclick=\"toggleTimeFrames(" + tab_id + ", " + i + ", this.checked);\"> <br>" +
        "<input type=\"button\" id=\"move_left_data_feild_button[" + tab_id + "][" + i + "]\" name=\"commit\" value=\"🠰 Move feild\" class=\"btn btn-sm color-white\" onclick=\"moveFeildLeft(" + tab_id + ", " + i + ");\">" +
        "<input type=\"button\" id=\"delete_data_feild_button[" + tab_id + "][" + i + "]\" name=\"commit\" value=\"Delete feild\" class=\"btn btn-sm color-danger\" onclick=\"deleteFeild(" + tab_id + ", " + i + ");\">" +
        "<input type=\"button\" id=\"move_right_data_feild_button[" + tab_id + "][" + i + "]\" name=\"commit\" value=\"Move feild 🠲\" class=\"btn btn-sm color-white\" onclick=\"moveFeildRight(" + tab_id + ", " + i + ");\">" +
    "</div>";
    
    var data_feild =
    "<div id=\"data_feilds[" + tab_id + "][" + i + "]\" class=\"feild-frame float-left\">" +
        data_header_span +
        time_frames +
        data_footer_span +
    "</div>";

    console.log(data_feild);
    
    var tagString = data_feild;
    var range = document.createRange();
    
    // Make the parent of the first div in the document becomes the context node
    range.selectNode(document.getElementById("tabs[" + tab_id + "]"));
    var documentFragment = range.createContextualFragment(tagString);
    var fields_divs = document.getElementById("fields_divs[" + tab_id + "]");
    console.log(fields_divs.children[i]);
    fields_divs.insertBefore(documentFragment, fields_divs.children[i]);
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

function nextTimeFrame(tabId, dataFeildId, timeFrameId) {
	var time_frames_div = document.getElementById("time_frames[" + tabId + "][" + dataFeildId + "]");
	toggleElementsDisplay(["time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]", "time_frame[" + tabId + "][" + dataFeildId + "][" + (timeFrameId<(time_frames_div.childElementCount)-1 ? timeFrameId+1 : 0) + "]"]);
}

function previousTimeFrame(tabId, dataFeildId, timeFrameId) {
	var time_frames_div = document.getElementById("time_frames[" + tabId + "][" + dataFeildId + "]");
	toggleElementsDisplay(["time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]", "time_frame[" + tabId + "][" + dataFeildId + "][" + (timeFrameId>0 ? timeFrameId-1 : (time_frames_div.childElementCount)-1) + "]"]);
}

function toggleTimeFrames(tabId, dataFeildId, state) {
    var time_frames_div = document.getElementById("time_frames[" + tabId + "][" + dataFeildId + "]");
    if (state) {
        var time_frame_span = document.getElementById("time_frame_span[" + tabId + "][" + dataFeildId + "][0]");
        time_frame_span.style.display = "block";
        
        var data_feild_value = document.getElementById("time_frame_value[" + tabId + "][" + dataFeildId + "][0]");
        data_feild_value.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][frames][0][value]";
    } else {
        var time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][0]");
        var time_frame_span = document.getElementById("time_frame_span[" + tabId + "][" + dataFeildId + "][0]");
        for (var i = 0; i < (time_frames_div.childElementCount); i++) {
            time_frames_div.children[i].style.display = "none";
        }
        time_frame.style.display = "block";
        time_frame_span.style.display = "none";
        
        var data_feild_value = document.getElementById("time_frame_value[" + tabId + "][" + dataFeildId + "][0]");
        data_feild_value.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][value]";
    }
}

function addTimeFrame(tabId, dataFeildId, timeFrameId, type) {
    var time_frames_div = document.getElementById("time_frames[" + tabId + "][" + dataFeildId + "]")
    var time_frame_id = (time_frames_div.childElementCount);
    
    var time_frame = document.createElement("div");
    time_frame.id = "time_frame[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    time_frame.style.display = "block";
    
    var time_frame_span = document.createElement("div");
    time_frame_span.id = "time_frame_span[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    
    var previous_time_frame_button = document.createElement("input");
    previous_time_frame_button.type = "button";
    previous_time_frame_button.id = "previous_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    previous_time_frame_button.name = "commit";
    previous_time_frame_button.value = "Previous Timeframe";
    previous_time_frame_button.classList.add("btn");
    previous_time_frame_button.classList.add("size-halfwidth");
    previous_time_frame_button.classList.add("float-left");
    previous_time_frame_button.setAttribute("onclick", "previousTimeFrame(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ");");
    
    var next_time_frame_button = document.createElement("input");
    next_time_frame_button.type = "button";
    next_time_frame_button.id = "next_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    next_time_frame_button.name = "commit";
    next_time_frame_button.value = "Next Timeframe";
    next_time_frame_button.classList.add("btn");
    next_time_frame_button.classList.add("size-halfwidth");
    next_time_frame_button.classList.add("float-left");
    next_time_frame_button.setAttribute("onclick", "nextTimeFrame(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ");");
    
    var add_time_frame_button = document.createElement("input");
    add_time_frame_button.type = "button";
    add_time_frame_button.id = "add_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    add_time_frame_button.name = "commit";
    add_time_frame_button.value = "Add Timeframe";
    add_time_frame_button.classList.add("btn");
    add_time_frame_button.classList.add("size-fullwidth");
    add_time_frame_button.classList.add("float-left");
    add_time_frame_button.setAttribute("onclick", "addTimeFrame(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ", '" + type + "');");
    
    var time_frame_id_text = document.createElement("span");
    time_frame_id_text.id = "time_frame_number[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    time_frame_id_text.innerHTML = "Timeframe " + (time_frame_id+1) + ":";
    
    var time_frame_time_group = document.createElement("div");
    time_frame_time_group.classList.add("group-micro");
    
    var time_frame_time_start_label = document.createElement("label");
    time_frame_time_start_label.innerHTML = "Start:\xa0";
    
    var time_frame_time_start = document.createElement("input");
    time_frame_time_start.id = "time_frame_start[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    time_frame_time_start.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][frames][" + time_frame_id + "][time][start]";
    time_frame_time_start.classList.add("input");
    time_frame_time_start.classList.add("input-sm");
    time_frame_time_start.type = "number";
    
    var time_frame_time_end_label = document.createElement("label");
    time_frame_time_end_label.innerHTML = "End:\xa0\xa0\xa0";
    
    var time_frame_time_end = document.createElement("input");
    time_frame_time_end.id = "time_frame_end[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    time_frame_time_end.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][frames][" + time_frame_id + "][time][end]";
    time_frame_time_end.classList.add("input");
    time_frame_time_end.classList.add("input-sm");
    time_frame_time_end.type = "number";
    
    var move_left_time_frame_button = document.createElement("input");
    move_left_time_frame_button.type = "button";
    move_left_time_frame_button.id = "move_left_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    move_left_time_frame_button.name = "commit";
    move_left_time_frame_button.value = "🠰 Move frame";
    move_left_time_frame_button.classList.add("btn");
    move_left_time_frame_button.classList.add("btn-xs");
    move_left_time_frame_button.classList.add("color-white");
    move_left_time_frame_button.setAttribute("onclick", "moveTimeFrameLeft(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ");");
    
    var delete_time_frame_button = document.createElement("input");
    delete_time_frame_button.type = "button";
    delete_time_frame_button.id = "delete_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    delete_time_frame_button.name = "commit";
    delete_time_frame_button.value = "Delete frame";
    delete_time_frame_button.classList.add("btn");
    delete_time_frame_button.classList.add("btn-xs");
    delete_time_frame_button.classList.add("color-danger");
    delete_time_frame_button.setAttribute("onclick", "deleteTimeFrame(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ");");
    
    var move_right_time_frame_button = document.createElement("input");
    move_right_time_frame_button.type = "button";
    move_right_time_frame_button.id = "move_right_time_frame_button[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
    move_right_time_frame_button.name = "commit";
    move_right_time_frame_button.value = "Move frame 🠲";
    move_right_time_frame_button.classList.add("btn");
    move_right_time_frame_button.classList.add("btn-xs");
    move_right_time_frame_button.classList.add("color-white");
    move_right_time_frame_button.setAttribute("onclick", "moveTimeFrameRight(" + tabId + ", " + dataFeildId + ", " + time_frame_id + ");");


    if (type == "text") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Text"
        var time_frame_value = document.createElement("textarea");
        time_frame_value.id = "time_frame_value[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
        time_frame_value.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][frames][" + time_frame_id + "][value]";
        time_frame_value.classList.add("textarea");
        time_frame_value.classList.add("textarea-vertical");
        time_frame_value.classList.add("size-fullwidth");
    } else if (type == "link") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Link"
        var time_frame_value = document.createElement("select");
        time_frame_value.id = "time_frame_value[" + tabId + "][" + dataFeildId + "][" + time_frame_id + "]";
        time_frame_value.name = "obj[tabs][" + tabId + "][feilds][" + dataFeildId + "][frames][" + time_frame_id + "][value]";
        time_frame_value.classList.add("select");
        time_frame_value.classList.add("size-fullwidth");
        
        var form_select = document.getElementById("new_link_field_obj");
        
        for (var i = 0; i < form_select.options.length; i++) {
    		var option = document.createElement("option");
    		option.text = form_select.options[i].text;
    		option.value = form_select.options[i].value;
    		
    		time_frame_value.appendChild(option);
        }
    }
    
    time_frame_time_group.appendChild(time_frame_time_start_label);
    time_frame_time_group.appendChild(time_frame_time_start);
    time_frame_time_group.appendChild(br());
    time_frame_time_group.appendChild(time_frame_time_end_label);
    time_frame_time_group.appendChild(time_frame_time_end);
    time_frame_time_group.appendChild(br());
    time_frame_time_group.appendChild(move_left_time_frame_button);
    time_frame_time_group.appendChild(delete_time_frame_button);
    time_frame_time_group.appendChild(move_right_time_frame_button);
    
    time_frame_span.appendChild(previous_time_frame_button);
    time_frame_span.appendChild(next_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(add_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_id_text);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_time_group);
    
    time_frame.appendChild(time_frame_span);
    time_frame.appendChild(time_frame_value_label);
    time_frame.appendChild(br());
    time_frame.appendChild(time_frame_value);
    time_frame.appendChild(br());
    
    time_frames_div.appendChild(time_frame);
    
    var old_time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]")
    old_time_frame.style.display = "none";
}

function changeTimeFrameId(tabId, dataFeildId, timeFrameId, newTabId, newDataFeildId, newTimeFrameId) {
    var time_frame =                   document.getElementById("time_frame[" + tabId + "][" +                   dataFeildId + "][" + timeFrameId + "]");
        time_frame.id = "time_frame[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
    
    var time_frame_span =              document.getElementById("time_frame_span[" + tabId + "][" +              dataFeildId + "][" + timeFrameId + "]");
        time_frame_span.id = "time_frame_span[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
    
    var previous_time_frame_button =   document.getElementById("previous_time_frame_button[" + tabId + "][" +   dataFeildId + "][" + timeFrameId + "]");
        previous_time_frame_button.id = "previous_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        previous_time_frame_button.setAttribute("onclick", "previousTimeFrame(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var next_time_frame_button =       document.getElementById("next_time_frame_button[" + tabId + "][" +       dataFeildId + "][" + timeFrameId + "]");
        next_time_frame_button.id = "next_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        next_time_frame_button.setAttribute("onclick", "nextTimeFrame(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var add_time_frame_button =        document.getElementById("add_time_frame_button[" + tabId + "][" +        dataFeildId + "][" + timeFrameId + "]");
        add_time_frame_button.id = "add_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        add_time_frame_button.setAttribute("onclick", "addTimeFrame(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var time_frame_number =            document.getElementById("time_frame_number[" + tabId + "][" +            dataFeildId + "][" + timeFrameId + "]");
        time_frame_number.id = "time_frame_number[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        time_frame_number.innerHTML = "Timeframe " + (newTimeFrameId+1) + ":";
    
    var time_frame_start =             document.getElementById("time_frame_start[" + tabId + "][" +             dataFeildId + "][" + timeFrameId + "]");
        time_frame_start.id = "time_frame_start[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        time_frame_start.name = "obj[tabs][" + newTabId + "][feilds][" + newDataFeildId + "][frames][" + newTimeFrameId + "][time][start]";
    
    var time_frame_end =               document.getElementById("time_frame_end[" + tabId + "][" +               dataFeildId + "][" + timeFrameId + "]");
        time_frame_end.id = "time_frame_end[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        time_frame_end.name = "obj[tabs][" + newTabId + "][feilds][" + newDataFeildId + "][frames][" + newTimeFrameId + "][time][end]";
    
    var move_left_time_frame_button =  document.getElementById("move_left_time_frame_button[" + tabId + "][" +  dataFeildId + "][" + timeFrameId + "]");
        move_left_time_frame_button.id = "move_left_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        move_left_time_frame_button.setAttribute("onclick", "moveTimeFrameLeft(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var delete_time_frame_button =     document.getElementById("delete_time_frame_button[" + tabId + "][" +     dataFeildId + "][" + timeFrameId + "]");
        delete_time_frame_button.id = "delete_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        delete_time_frame_button.setAttribute("onclick", "deleteTimeFrame(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var move_right_time_frame_button = document.getElementById("move_right_time_frame_button[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]");
        move_right_time_frame_button.id = "move_right_time_frame_button[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        move_right_time_frame_button.setAttribute("onclick", "moveTimeFrameRight(" + newTabId + ", " + newDataFeildId + ", " + newTimeFrameId + ");");
    
    var time_frame_value =             document.getElementById("time_frame_value[" + tabId + "][" +             dataFeildId + "][" + timeFrameId + "]");
        time_frame_value.id = "time_frame_value[" + newTabId + "][" + newDataFeildId + "][" + newTimeFrameId + "]";
        
    var toggle_time_frames_checkbox =  document.getElementById("toggle_time_frames_checkbox[" + tabId + "][" +  dataFeildId + "]");
    
    if (toggle_time_frames_checkbox.checked) {
        time_frame_value.name = "obj[tabs][" + newTabId + "][feilds][" + newDataFeildId + "][frames][" + newTimeFrameId + "][value]";
    } else {
        time_frame_value.name = "obj[tabs][" + newTabId + "][feilds][" + newDataFeildId + "][value]";
    }
}

function changeFeildId(tabId, dataFeildId, newTabId, newId) {
    var data_feild =                   document.getElementById("data_feilds[" + tabId + "][" +                  dataFeildId + "]");
        data_feild.id = "data_feilds[" + newTabId + "][" + newId + "]";
    
    var data_header_span =             document.getElementById("data_header_span[" + tabId + "][" +             dataFeildId + "]");
        data_header_span.id = "data_header_span[" + newTabId + "][" + newId + "]";
    
    var data_feild_type =              document.getElementById("feilds_type[" + tabId + "][" +                  dataFeildId + "]");
    	data_feild_type.id = "feilds_type[" + newTabId + "][" + newId + "]";
        data_feild_type.name = "obj[tabs][" + newTabId + "][feilds][" + newId + "][type]";

    var data_feild_name =              document.getElementById("feilds_name[" + tabId + "][" +                  dataFeildId + "]");
        data_feild_name.id = "feilds_name[" + newTabId + "][" + newId + "]";
        data_feild_name.name = "obj[tabs][" + newTabId + "][feilds][" + newId + "][name]";
    
    var time_frames =                  document.getElementById("time_frames[" + tabId + "][" +                  dataFeildId + "]");
        time_frames.id = "time_frames[" + newTabId + "][" + newId + "]";
    
    for (var i = 0; i < time_frames.childElementCount; i++) {
        changeTimeFrameId(tabId, dataFeildId, i, newTabId, newId, i);
    }
    
    var data_footer_span =             document.getElementById("data_footer_span[" + tabId + "][" +             dataFeildId + "]");
        data_footer_span.id = "data_footer_span[" + newTabId + "][" + newId + "]";
    
    var time_frames_default =          document.getElementById("time_frames_default[" + tabId + "][" +          dataFeildId + "]");
        time_frames_default.id = "time_frames_default[" + newTabId + "][" + newId + "]";
        time_frames_default.name = "obj[tabs][" + newTabId + "][feilds][" + newId + "][time]";
    
    var toggle_time_frames_checkbox =  document.getElementById("toggle_time_frames_checkbox[" + tabId + "][" +  dataFeildId + "]");
        toggle_time_frames_checkbox.id = "toggle_time_frames_checkbox[" + newTabId + "][" + newId + "]";
        toggle_time_frames_checkbox.name = "obj[tabs][" + newTabId + "][feilds][" + newId + "][time]";
        toggle_time_frames_checkbox.setAttribute("onclick", "toggleTimeFrames(" + newTabId + ", " + newId + ", this.checked);");
    
    var move_left_data_feild_button =  document.getElementById("move_left_data_feild_button[" + tabId + "][" +  dataFeildId + "]");
        move_left_data_feild_button.id = "move_left_data_feild_button[" + newTabId + "][" + newId + "]";
        move_left_data_feild_button.setAttribute("onclick", "moveFeildLeft(" + newTabId + ", " + newId + ");");
    
    var delete_data_feild_button =     document.getElementById("delete_data_feild_button[" + tabId + "][" +     dataFeildId + "]");
        delete_data_feild_button.id = "delete_data_feild_button[" + newTabId + "][" + newId + "]";
        delete_data_feild_button.setAttribute("onclick", "deleteFeild(" + newTabId + ", " + newId + ");");
    
    var move_right_data_feild_button = document.getElementById("move_right_data_feild_button[" + tabId + "][" + dataFeildId + "]");
        move_right_data_feild_button.id = "move_right_data_feild_button[" + newTabId + "][" + newId + "]";
        move_right_data_feild_button.setAttribute("onclick", "moveFeildRight(" + newTabId + ", " + newId + ");");
}

function changeTabId(tabId, newId) {
    var tabDiv = document.getElementById("tabs[" + tabId + "]");
        tabDiv.id = "tabs[" + newId + "]";
    
    var nameInput = document.getElementById("tabs_name[" + tabId + "]");
        nameInput.id = "tabs_name[" + newId + "]";
        nameInput.name = "obj[tabs][" + newId + "][name]";
    
    var move_up_tab_button = document.getElementById("move_up_tab_button[" + tabId + "]");
        move_up_tab_button.id = "move_up_tab_button[" + newId + "]";
        move_up_tab_button.setAttribute("onclick", "moveTabUp(" + newId + ");");
    
    var delete_tab_button = document.getElementById("delete_tab_button[" + tabId + "]");
        delete_tab_button.id = "delete_tab_button[" + newId + "]";
        delete_tab_button.setAttribute("onclick", "deleteTab(" + newId + ");");
    
    var move_down_tab_button = document.getElementById("move_down_tab_button[" + tabId + "]");
        move_down_tab_button.id = "move_down_tab_button[" + newId + "]";
        move_down_tab_button.setAttribute("onclick", "moveTabDown(" + newId + ");");
    
    var fields_divs = document.getElementById("fields_divs[" + tabId + "]");
        fields_divs.id = "fields_divs[" + newId + "]";
}

function deleteTimeFrame(tabId, dataFeildId, timeFrameId) {
    var time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]");
    var time_frames_count = (time_frame.parentNode.childElementCount);
    if (time_frames_count > 1) {
        if (confirm("Are you sure you want to delete this timeframe")) {
            time_frame.parentNode.removeChild(time_frame);
            for (var i = timeFrameId+1; i < time_frames_count; i++) {
                changeTimeFrameId(tabId, dataFeildId, i, tabId, dataFeildId, i-1);
            }
        }
        var time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][" + ((timeFrameId-1) >= 0 ? (timeFrameId-1) : timeFrameId) + "]");
        time_frame.style.display = "block";
    } else {
        alert("You can't delete the last timeframe");
    }
}

function moveTimeFrameLeft(tabId, dataFeildId, timeFrameId) {
    var time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]");
    var time_frames_count = (time_frame.parentNode.childElementCount);
    if (timeFrameId > 0) {
        changeTimeFrameId(tabId, dataFeildId, timeFrameId, tabId, dataFeildId, timeFrameId-1);
        changeTimeFrameId(tabId, dataFeildId, timeFrameId-1, tabId, dataFeildId, timeFrameId);
        time_frame.parentNode.insertBefore(time_frame, time_frame.previousElementSibling);
    }
}

function moveTimeFrameRight(tabId, dataFeildId, timeFrameId) {
    var time_frame = document.getElementById("time_frame[" + tabId + "][" + dataFeildId + "][" + timeFrameId + "]");
    console.log(time_frame);
    var time_frames_count = (time_frame.parentNode.childElementCount);
    console.log(time_frames_count);
    console.log(time_frame.parentNode);
    console.log(timeFrameId);
    console.log(time_frames_count-1);
    console.log(timeFrameId+1);
    if (timeFrameId < time_frames_count-1) {
        changeTimeFrameId(tabId, dataFeildId, timeFrameId+1, tabId, dataFeildId, timeFrameId);
        changeTimeFrameId(tabId, dataFeildId, timeFrameId, tabId, dataFeildId, timeFrameId+1);
        time_frame.parentNode.insertBefore(time_frame, time_frame.nextElementSibling.nextElementSibling);
    }
}

function deleteFeild(tabId, dataFeildId) {
    var data_feild = document.getElementById("data_feilds[" + tabId + "][" + dataFeildId + "]");
    var data_feilds_count = (data_feild.parentNode.childElementCount);
    if (confirm("Are you sure you want to delete this feild")) {
        data_feild.parentNode.removeChild(data_feild);
        for (var i = dataFeildId+1; i < data_feilds_count; i++) {
            changeFeildId(tabId, i, tabId, i-1);
        }
    }
}

function moveFeildLeft(tabId, dataFeildId) {
    var data_feild = document.getElementById("data_feilds[" + tabId + "][" + dataFeildId + "]");
    var data_feilds_count = (data_feild.parentNode.childElementCount)-5;
    if (dataFeildId > 0) {
        changeFeildId(tabId, dataFeildId, tabId, dataFeildId-1);
        changeFeildId(tabId, dataFeildId-1, tabId, dataFeildId);
        data_feild.parentNode.insertBefore(data_feild, data_feild.previousElementSibling);
    }
}

function moveFeildRight(tabId, dataFeildId) {
    var data_feild = document.getElementById("data_feilds[" + tabId + "][" + dataFeildId + "]");
    var data_feilds_count = (data_feild.parentNode.childElementCount)-5;
    if (dataFeildId < data_feilds_count) {
        changeFeildId(tabId, dataFeildId+1, tabId, dataFeildId);
        changeFeildId(tabId, dataFeildId, tabId, dataFeildId+1);
        data_feild.parentNode.insertBefore(data_feild, data_feild.nextElementSibling.nextElementSibling);
    }
}

function deleteTab(tabId) {
    var tab = document.getElementById("tabs[" + tabId + "]");
    var tabs_count = (tab.parentNode.childElementCount);
    if (confirm("Are you sure you want to delete this feild")) {
        tab.parentNode.removeChild(tab);
        for (var i = tab+1; i < tabs_count; i++) {
            changeTabId(i, i-1);
        }
    }
}

function moveTabUp(tabId) {
    var tab = document.getElementById("tabs[" + tabId + "]");
    var tabs_count = (tab.parentNode.childElementCount);
    if (tabId > 0) {
        changeTabId(tabId, tabId-1);
        changeTabId(tabId-1, tabId);
        tab.parentNode.insertBefore(tab, tab.previousElementSibling);
    }
}

function moveTabDown(tabId) {
    var tab = document.getElementById("tabs[" + tabId + "]");
    var data_feilds_count = (tab.parentNode.childElementCount);
    if (tabId < data_feilds_count) {
        changeTabId(tabId+1, tabId);
        changeTabId(tabId, tabId+1);
        tab.parentNode.insertBefore(tab, tab.nextElementSibling.nextElementSibling);
    }
}

function insertText(txtareaId, text) {
	var txtarea = document.getElementById(txtareaId);
	var scrollPos = txtarea.scrollTop;
	var strPos = 0;
	var browser = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
		"ff" : (document.selection ? "ie" : false ) );
	if (browser == "ie") { 
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart ('character', -txtarea.value.length);
		strPos = range.text.length;
	}
	else if (browser == "ff") strPos = txtarea.selectionStart;

	var front = (txtarea.value).substring(0, strPos);
	var back = (txtarea.value).substring(strPos, txtarea.value.length);
	txtarea.value=front+text+back;
	strPos = strPos + text.length;
	if (browser == "ie") { 
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart ('character', -txtarea.value.length);
		range.moveStart ('character', strPos);
		range.moveEnd ('character', 0);
		range.select();
	}
	else if (browser == "ff") {
		txtarea.selectionStart = strPos;
		txtarea.selectionEnd = strPos;
		txtarea.focus();
	}
	txtarea.scrollTop = scrollPos;
}

// show.js
function updateTimeSpans(time) {
    var feilds = document.getElementById("feilds");
    for (var i = 0; i < feilds.children.length-4; i++) {
        var values = document.getElementById("feild-" + i + "-values");
        if (values == null) {
            continue;
        }
        for (var j = 0; j < values.children.length; j++) {
            var value_div = document.getElementById("feild-" + i + "-value-" + j);
            var value = parseInt(document.getElementById("feild-" + i + "-value-" + j + "-value").value);
            var start = parseInt(document.getElementById("feild-" + i + "-value-" + j + "-start").value);
            var end = parseInt(document.getElementById("feild-" + i + "-value-" + j + "-end").value);
            if ((time >= start && time <= end) || time == "") {
                value_div.style.display = "block";
            } else {
                value_div.style.display = "none";
            }
        }
    }
}