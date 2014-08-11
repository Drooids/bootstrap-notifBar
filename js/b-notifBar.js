 (function() {

	var isOpen = false;

            notif = $("#mx-notifications").popover({

                html : true,
                placement : 'bottom',
                template: '<div class="popover popover-notifications" style="border:3px solid rgba(0, 0, 0, 0.25); box-shadow: 0 0 10px -5px #000; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.25);"><div class="arrow"></div><h3 class="popover-title popover-notif-title"></h3><div class="popover-content popover-n-content"></div></div>',
                
                content: function() {
                  return $('#notifications-content').html();
                },

                title: function() {
                  return $('#notifications-title').html();
                }

            });

            $(".n-loading-anim").hide();
            $(".main_notifications").show();
            $(".view_full_log").hide();

            if(isOpen) {
                notif.popover('hide');
            } else {
                notif.popover('show');
            }

            $scope.isOpen = !$scope.isOpen;

});
