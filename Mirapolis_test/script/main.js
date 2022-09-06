// $('.folder').on('click', function () {
//     console.log('hello');
//     $(this).children('ul').toggleClass('folder-close');
// });


$(function () {
    $('.structure li:has(ul)').addClass('parent-folder')

        $('.parent-folder > span').on('click', function () {
            let childerenFolder = $(this).parent('.parent-folder').find(' > ul > li');
            console.log (childerenFolder);
                if (childerenFolder.is(":visible")) {
                    childerenFolder.parent().hide();
                    $(this).find(' > i').addClass('fa-folder-o').removeClass('fa-folder-open-o');
                } else {
                    childerenFolder.parent().show();
                    $(this).find(' > i').addClass('fa-folder-open-o').removeClass('fa-folder-o');
                }
    });
});