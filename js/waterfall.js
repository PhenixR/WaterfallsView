window.onload = function() {
    img_location("container","box")
}
function img_location(parent,content) {
    var dparent = document.getElementById(parent);
    var dcontent = get_child_element(dparent,content);
    var dec_width = get_width(dparent,dcontent);
}
function get_child_element(parent, content) {
    var content_array = [];
    var all_contant = parent.getElementsByTagName("*");
    for ( let i = 0; i<all_contant.length; i++ ) {
        if (all_contant[i].className === content) {
            content_array.push(all_contant[i])
        }
    }
    return content_array;
}
function get_width(dparent,dcontent) {
    var img_width = dcontent[1].offsetWidth;
    var win_width = document.documentElement.clientWidth;
    var num_width = Math.floor(win_width/img_width);
    dparent.style.cssText = "width:" + img_width * num_width + "px; margin:0 auto";
}