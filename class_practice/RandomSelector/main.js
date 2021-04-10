window.onload = function () {
    //document.write("Hello JavaScript");
};
$(function () {
    $("input").on("click", function () {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);

        images = ['ramen.jpg', 'rice.jpg','dumpling.jpg'];
        while($("li").eq(randomChildNumber).text()==$("h1").text()){
            randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        };
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);
    });
});