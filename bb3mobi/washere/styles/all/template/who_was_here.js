var wwh_show_time_users;
var wwh_show_time_bots;
function wwh_show_hide_time(group) {
	var i = 0;
	if (group == 0) {
		var user = document.getElementsByClassName('wwh_time_users');
		var caption = document.getElementsByClassName('wwh_show_time_caption_users');
		wwh_show_time_users = !wwh_show_time_users;
		var style_display = ((wwh_show_time_users) ? "" : "none");
		var style_opacity = ((wwh_show_time_users) ? "1.0" : "0.5");
	}
	if (group == 1) {
		var user = document.getElementsByClassName('wwh_time_bots');
		var caption = document.getElementsByClassName('wwh_show_time_caption_bots');
		wwh_show_time_bots = !wwh_show_time_bots;
		var style_display = ((wwh_show_time_bots) ? "" : "none");
		var style_opacity = ((wwh_show_time_bots) ? "1.0" : "0.5");
	}
	for (i = 0; i < user.length; i ++) {
		user[i].style.display = style_display;
	}
	for (i = 0; i < caption.length; i ++) {
		caption[i].style.opacity = style_opacity;
	}
}
