
        $(".fire-enter").click(function () {
            localStorage.setItem("fire-showed", true);
            $(".quiz1-background").show();
            $(".black-fire-page").hide();
        });

        $(".first-story-show").click(function () {
            $(".lottie-fire-page").hide();
            $(".fire-ending-story").show();
            $(".story").attr("src", "images/첫번째 이야기.png");
            $(".close-first-fire").show();
        });
        $(".second-story-show").click(function () {
            $(".lottie-fire-page").hide();
            $(".fire-ending-story").show();
            $(".story").attr("src", "images/두번째 이야기.png");
            $(".close-second-fire").show();
        });
        $(".third-story-show").click(function () {
            $(".lottie-fire-page").hide();
            $(".fire-ending-story").show();
            $(".story").attr("src", "images/세번째 이야기.png");
            $(".close-third-fire").show();
        });

        $(".close-first-fire").click(function () {
           $(".quiz1-background").hide();
           $(".fire-story").hide(); 
            $(".direction-deoksu").show();
        });

        $(".close-second-fire").click(function () {
            $(".quiz1-background").hide();
            $(".fire-story").hide(); 
             $(".direction-rest").show();
         });

         $(".close-third-fire").click(function () {
            $(".quiz1-background").hide();
            $(".fire-story").hide(); 
             $(".direction-deoksu").show();
         });
 
