(function($) {
  "use strict";

  //theme
  if ($("body").hasClass("logged-in") !== true) {
    $("#top-menu .login_show").remove();
  }

  //show-more close btn
  //더보기 닫기버튼 복제
  if ($(".wpsm-hide").length !== -1) {
    $(".wpsm-hide")
      .parent()
      .prepend(
        `<p class="wpsm-hide" style="color: #666;font-size: 100%;text-align: left;"> CLOSE</p>`
      );
  }
  $("p.wpsm-hide").html('<i class="fas fa-times"></i>');

  //poster thumnail
  //스크롤 썸네일 에니매이션
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    $(".fallex").css("background-position-y", -scroll);
  });

  //Markdown Github
  //이미지 부모태그 클래스
  $(".markdown-body img")
    .parent()
    .addClass("img_wrap_a");

  var mdImg = document.querySelector(".markdown-body .img_wrap_a");
  if (mdImg !== null) {
    mdImg.parentElement.style.lineHeight = 0;
    mdImg.parentElement.style.marginTop = "40px";
  }

  $(".markdown-body img").each(function() {
    let alt = $(this).attr("alt");

    // Add slick-slider id
    let id_location = alt.indexOf("#");
    if (id_location !== -1) {
      let addId = alt.substr(id_location + 1);
      $(this)
        .parent()
        .parent()
        .attr("id", addId);
    }

    // Add img size class
    if (alt.indexOf("size-small") !== -1) {
      $(this)
        .parent()
        .addClass("size_small");
    } else if (alt.indexOf("size-middle") !== -1) {
      $(this)
        .parent()
        .addClass("size_middle");
    }

    // if(alt == 'slick-slider'){
    //     $(this).parent().addClass('slick-slider');
    // }
  });

  // github md 가져올때 slick 슬라이드 적용시킬려고
  // 슬라이드 defore after에다가 빈 blockquote를 만들었다.
  // 그 DOM을 제거해주는 스크립트
  $("blockquote").each(function() {
    var t = $(this);
    var empty = t.text();
    if (empty.length == 1) {
      t.remove();
    }
  });

  // 코드는 번역제외
  $("pre").addClass("notranslate");
})(jQuery);
