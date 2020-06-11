$(document).ready(function(){
    $('.loading').fadeOut(2000,function(){
        $('body').css('overflow','auto');
    });
    
})
var advOffSet=$('#about').offset().top;
$('.back-to-top').css('display','none')
console.log(advOffSet);
$(window).scroll(function(){
    var x=$(window).scrollTop();
    if(x>advOffSet){
        console.log(advOffSet);
        $('.navbar').css('backgroundColor','#00c3da ', 'transaction','1s all');
        $('.back-to-top').fadeIn(1000);
    }
    else{
        $('.navbar').css({backgroundColor:'rgba(0,0,0,0.7) '}, {transition:'1s all'});
        $('.back-to-top').fadeOut(1000);
    }
})
$('.back-to-top').click(function(){
    $('body').animate({scrollTop:0},2000)
})
$('.linker').click(function(){
    var currentHref=$(this).attr('href');
    var currentOffSet=$(currentHref).offset().top;
    $('body','html').animate({scrollTop:currentOffSet},1000);

})
$('.count').countUp();