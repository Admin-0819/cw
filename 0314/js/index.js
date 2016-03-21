$(function(){
	$('#footer').on('click', 'div:not(.select)', function() {
			$(this).addClass('select');
			var $li = $(this).siblings().filter('.select');
			$(this).siblings().removeClass('select');
			if ($li.length > 0) {
				var $Imgs = $li.find('img');
				var src = $Imgs.attr('src').slice(0,-6);				
				$Imgs.attr('src', src+'.png');
			}			
			var $Img = $('img', this)
			var str = $Img.attr('src').slice(0, -4);
			$Img.attr('src', str + '-b.png');
		});
	var list = $(".bt");
	list.click(function(){
		list.removeClass('header-C');
		$(this).addClass("header-C");
		return false;
	});

		$(".nav-tab").click(function(){
			$(".nav-tab").removeClass('nav-border');
			$(this).addClass('nav-border');
			return false;
		});
		$(".nav-tab1").click(function(){
			$("#main2").css({
				visibility: 'hidden',
			});
			$("#main3").css({
				visibility: 'hidden',
			});
			$("#main").css({
				visibility: 'visible',
			});
		});
		$(".nav-tab2").click(function(){
			$("#main").css({
				visibility: 'hidden',
			});
			$("#main2").css({
				visibility: 'visible',
			});
			$("#main3").css({
				visibility: 'hidden',
			});
		});
		$(".nav-tab3").click(function(){
			$("#main").css({
				visibility: 'hidden',
			});
			$("#main2").css({
				visibility: 'hidden',
			});
			$("#main3").css({
				visibility: 'visible',
			});
		});





var dataList = [];
function a(num,fn){
	num = num || 1;
	var $div = $("<div><img src=''/><span></span></div>");
	var $img = $("img",$div);
	var $ul = $(".main-left2").height > $(".main-right2").height ? $(".main-left2") : $(".main-right2");
	$ul.append($div);
	$img.attr({
		src: 'http://101.200.173.217:8080/FootBall/' + dataList[index].defaultFilePath + dataList[index].thumbnailname
	});
	$("span",$div).html(dataList[index].content);
}






});