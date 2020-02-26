jQuery(function ($) {

    $(".settingsSec").click(function () {
        $(this).find(".settingBox").css("display", "block");
        $(".whiteOverlay").css("display", "block");
        $(".bookImg").addClass("blure");

    });
    $('body').click(function (evt) {
  
           
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(evt.target).closest('.settingsSec').length>0){
            return false;
        }
       
        else{
            $(this).find(".settingBox").css("display", "none");
            $(".whiteOverlay").css("display", "none");
        }
        //Do processing of click event here for every element except with id menu_content

    });

});

