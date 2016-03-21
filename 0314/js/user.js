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
	var list = $(".bt1,.bt2");
	list.click(function(){
		list.removeClass('header-C');
		$(this).addClass("header-C");
		return false;
	})
});