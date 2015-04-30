$(document).ready(function(){
    $("#toggleDropDown").click(function(){
        $("#contentsDropDown").slideDown("slow");
        $("#toggleDropDown").css("border-bottom-style","none");
        $("#toggleDropDown").css("height","100px");
    });
});