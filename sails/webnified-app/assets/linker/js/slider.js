$(document).ready(function(){
    var page = countPages($('.images').length);    
    
    $(".next-btn").click(function(){
        var current = page.shift();
        $(".images").eq( current ).addClass("hide");
        $(".images").eq( page[0] ).removeClass("hide");
        page.push( current );
    });
    $(".prev-btn").click(function(){
        var last = page.pop();
        $(".images").eq( page[0] ).addClass("hide");
        $(".images").eq( last ).removeClass("hide");
        page.unshift( last );
    });
    
    function countPages(numberOfPages){
        var pages = [];
        for(var index = 0 ; index < numberOfPages ; index ++)
            pages.push(index);
        return pages;
    }
});