$(document).ready(function(){ 
		var ip;
		$.getJSON("https://api.ipify.org/?format=json", function(e) {
			ip = e.ip;
			getPhoneCode(ip);
		});
	}); 
	
	function getPhoneCode(ip) {
		var url = 'https://ipapi.co/' + ip + '/country_calling_code/';
		$.get(url, function(c) {
			$('input[name="prefixPhone"]').val(c);
		});
	}