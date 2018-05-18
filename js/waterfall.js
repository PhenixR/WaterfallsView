window.onload = function (){
    img_location("container","box")
}

function img_location(parent,content) {
    var dparent = document.getElementById(parent);
    var dcontent = get_child_element(dparent,content);
    var dec_width = get_width(dparent,dcontent);
    var img_location = min_img_set(dec_width,dcontent)
}

function get_child_element(parent,content) {
    var content_array = [];
    var all_content = parent.getElementsByTagName("*");
    for (var i = 0; i<all_content.length; i++) {
        if (all_content[i].className === content) {
            content_array.push(all_content[i])
        }
    }
    return content_array;
}

function get_width(dparent,dcontent) {
    var img_width = dcontent[1].offsetWidth;
    var win_width = document.documentElement.clientWidth;
    var num_width = Math.floor(win_width / img_width);
    dparent.style.cssText = "width:" + img_width * num_width +"px; margin:0 auto";
    return num_width;
}

function min_img_set(dec_width,dcontent) {
    var box_height_array = [];
    for ( var i = 0; i < dcontent.length; i++) {
        if ( i<dec_width ) {
            box_height_array[i] = dcontent[i].offsetHeight;
        } else {
            var min_height = Math.min.apply(null, box_height_array);
            var min_index = get_min_index(box_height_array,min_height);
            dcontent[i].style.position = "absolute";
            dcontent[i].style.top = min_height + "px";
            dcontent[i].style.left = dcontent[min_index].offsetLeft + "px";
            box_height_array[min_index] =box_height_array[min_index] + dcontent[i].offsetHeight;
        }
    }
}

function get_min_index (box_height_array,min_height) {
    for (var i in box_height_array) {
        if (box_height_array[i] === min_height) {
            return i;
        }
    }
}

