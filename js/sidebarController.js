/**
 * Created by HG on 2015-11-24.
 */
$(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});
