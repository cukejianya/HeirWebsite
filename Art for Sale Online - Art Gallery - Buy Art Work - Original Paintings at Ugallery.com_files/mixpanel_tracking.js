
   //jQuery.noConflict();
        //var $j = jQuery.noConflict();
        $(document).ready(function() {
            $('.print_buttons a, .purchase_btn a').click(function(e) {
                var price = $('.price_box span').text();
                console.log(price);
                mixpanel.track("Add Item To Cart", { "price": price }, function() { console.log("sup") });
            });

            if (window.location.search.indexOf("Search") != -1 && window.location.search.indexOf("page") == -1) {
                mixpanel.track("Search Used", { search_term: getParameterByName("Search") });
            }

            //mixpanel.track_forms("form", "Search Event", function(form) { return { search_term: $('.txtSearch').val() }; });
            //  if ($('.txtSearch').length !== 0) {
            //$('form').submit(function() {
            //     mixpanel.track("Search Event 2", { search_term: $('.txtSearch').val() });
            // });
            // }

            if ($('.color_section').length !== 0) {
                mixpanel.track_links(".color_section a", "Color Filter Used", function(link) { return { color: $(link).find('span').attr('title')} });
            }
            if ($('#price .art_info_content').length !== 0) {
                mixpanel.track_links("#price .art_info_content a", "Price Filter Used", function(link) { return { price: $(link).find('span').text()}});
            }
            if ($('#size .art_info_content').length !== 0) {
                mixpanel.track_links("#size .art_info_content a", "Size Filter Used", function(link) { return { size: $(link).find('span').text()}});
            }
            if ($('#style .art_info_content').length !== 0) {
                mixpanel.track_links("#style .art_info_content a", "Style Filter Used", function(link) { return { style: $(link).find('span').text()} });
            }

        });


        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.search);
            if (results == null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
