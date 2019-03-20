(function($){
    //theme
    if($('body').hasClass('logined-in') !== true){
        $('#top-menu .login_show').remove();
    }

    //show-more close btn
    //더보기 닫기버튼 복제
    if($('.wpsm-hide').length !== -1){
        $('.wpsm-hide')
        .parent()
        .prepend(`<p class="wpsm-hide" style="color: #666;font-size: 100%;text-align: left;"> CLOSE</p>`);
    }
    $('p.wpsm-hide').html('<i class="fas fa-times"></i>');

    //poster thumnail
    //스크롤 썸네일 에니매이션
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        $('.fallex').css('background-position-y',-scroll);
    });

    //Markdown Github
    //이미지 부모태그 클래스
    $('.markdown-body img').parent().addClass('img_wrap_a');
    $('.markdown-body img').each(function(){
        let alt = $(this).attr('alt');
        let location = alt.indexOf('#');
        if(location !== -1){
            let addId = alt.substr(location+1);
            $(this).parent().parent().attr('id',addId);
        }
        // if(alt == 'slick-slider'){
        //     $(this).parent().addClass('slick-slider');
        // }
    });
})(jQuery);
