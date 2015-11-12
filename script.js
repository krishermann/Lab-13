$(document).ready(function(){

	$.get("https://www.reddit.com/r/aww/.json", function(response){
		
		var posts = response.data.children;
		/*console.log(post.author);
		console.log(post.thumbnail);
		console.log(post.title);
		console.log(post.url);
		console.log(post.created_UTC);*/


		$.each(posts, function(index, post){
		var $container =  $('<div />').appendTo($('body'))
   		$('<img />').attr('src', post.data.thumbnail).appendTo($container);
   		var $title = $('<a />').html('<h2>' +post.data.title + '</h2>' ).appendTo($container);
   		$title.attr('href', post.data.url);
   		
		$('<p />').text(post.data.author).appendTo($container);

		var postDate = new Date(post.data.created * 1000);

		$('<p />').text(postDate).appendTo($container);

		});
	
	var $img = $("img");
	$img.on('click', function(){
		$(this).toggleClass('image-size');
	});
	
	var $h1 = $('h1');
	$h1.on('click', function(){
		$(this).pinkify().fadeOut(700).fadeIn(700);
	})
	
	});

});