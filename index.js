$(document).ready(async function() {
    $("body").css("height", (window.screen.height * 9)+ "px")

    window.addEventListener('scroll', function () {
        $(".block-main").css("opacity", (1 - window.scrollY / window.screen.height));

        if (window.scrollY / window.screen.height < 2) {
            $(".block-1").css("opacity", window.scrollY / window.screen.height - 1);
        } else {
            $(".block-1").css("opacity", (3 - window.scrollY / window.screen.height));
        }

        if (window.scrollY / window.screen.height < 4) {
            $(".block-2").css("opacity", window.scrollY / window.screen.height - 3);
        } else {
            $(".block-2").css("opacity", (5 - window.scrollY / window.screen.height));
        }

        if (window.scrollY / window.screen.height < 6) {
            $(".block-3").css("opacity", window.scrollY / window.screen.height - 5);
        } else {
            $(".block-3").css("opacity", (7 - window.scrollY / window.screen.height));
        }

        if (window.scrollY / window.screen.height < 8) {
            $(".block-4").css("opacity", window.scrollY / window.screen.height - 7);
        }
        // } else {
        //     $(".block-4").css("opacity", (9 - window.scrollY / window.screen.height));
        // }

        if (window.scrollY / window.screen.height < 1) {
            $(".block-main").removeClass("remove").css("animation", "--");
        } else {
            $(".block-main").addClass("remove");
        }

        if (window.scrollY / window.screen.height > 1 && window.scrollY / window.screen.height < 3) {
            $(".block-1").removeClass("remove");
        } else {
            $(".block-1").addClass("remove");
        }

        if (window.scrollY / window.screen.height > 3 && window.scrollY / window.screen.height < 5) {
            $(".block-2").removeClass("remove");
        } else {
            $(".block-2").addClass("remove");
        }

        if (window.scrollY / window.screen.height > 5 && window.scrollY / window.screen.height < 7) {
            $(".block-3").removeClass("remove");
        } else {
            $(".block-3").addClass("remove");
        }

        if (window.scrollY / window.screen.height > 7 && window.scrollY / window.screen.height < 9) {
            $(".block-4").removeClass("remove");
        } else {
            $(".block-4").addClass("remove");
        }

        console.log(window.scrollY / window.screen.height);
    });
});