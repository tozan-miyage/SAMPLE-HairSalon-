jQuery(function () {
    //初期化
    AOS.init();
    // ヘッダーの高さを取得
    let height = jQuery(".navbar").height();

    //ヘッダーの高さ分だけコンテンツを下げる
    jQuery("body").css("margin-top", height); //10pxだけ余裕をもたせる

    // ナビゲーションリンクをクリックしたら、スクロールする


    jQuery('a[href^="https://hair-slon-sample.local/#"').click(function () {
        // headerの高さを指定
        let headerHeight = height + 10;
        // animateの速さを指定
        let speed = 1000;
        // クリックされた要素のhref属性を取得
        let href = jQuery(this).attr("href");

        // hrefのurl https://musica.local/を削除
        const deleteHttps = 'https://hair-slon-sample.local/';
        let scrollTarget = href.replace(deleteHttps, '');

        // href属性が#かつ空白であれば、'html',そうでなければ、変数hrefを格納
        let target = jQuery(href == "#" || href == "" ? "html" : scrollTarget);
        // ヘッダーの高さを引いたtargetの座標を取得
        let position = target.offset().top - headerHeight;

        // html,bodyをアニメーション
        jQuery("html, body").animate({
                scrollTop: position,
            },
            speed,
            "swing"
        );

        // ハンバーガーメニューを閉じる
        jQuery(".collapse").collapse("hide");
        return false;
    });

    // 終了
    console.log('main.js,read ok!');
});