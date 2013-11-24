$(document).ready(function() {

	if($('pre').length)
	{
		SyntaxHighlighter.config.strings.alert = '';
		SyntaxHighlighter.defaults['auto-links'] = false;
		SyntaxHighlighter.config.clipboardSwf = '/style/scripts/sh2/scripts/clipboard.swf';
		SyntaxHighlighter.all();
	}

	// enable tipsy tooltips
	$('#nav_social a').tipsy({fade: true, gravity: 'n'});

	// enable toggle buttons
	function jumpTop() {
		$('html, body').animate({scrollTop:0}, 300);
	}

	$('a.toggle').on('click', function(e) {
		jumpTop();
		e.preventDefault();
	});
	
	// if an image is wrapped in a link, add class to link
	$('a img').each(function() {
		if($(this).parent('a').length > 0) {
			$(this).parent('a').addClass('img');
		}
	});
	
	// track download links
	$('a.download').on('click', function(e) {
		if(typeof(pageTracker) != 'undefined') {
			pageTracker._trackPageview($(this).attr('href'));
		}
	});

	// tabs for software?
	if($('#software .tabs').length)
	{
		$('#software').easytabs({
			updateHash : false
		});
	}
});
