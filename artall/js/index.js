function Index() {
    this.a = 1
}

var news = {
    constructor: Index,
    anchor: function () {
        $(".news-nav a").click(function () {
            var v = "#" + $(this).attr('v');
            $("html,body").animate({scrollTop: $(v).offset().top}, 1000);
        });
    }
};

Index.prototype.news = news;

var index = new Index();

// 锚点
index.news.anchor();


