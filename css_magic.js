		
		var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

	function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
	function toHex(n) {
	 n = parseInt(n,10);
	 if (isNaN(n)) return "00";
	 n = Math.max(0,Math.min(n,255));
	 return "0123456789ABCDEF".charAt((n-n%16)/16)
		  + "0123456789ABCDEF".charAt(n%16);
	}
	function rnd(limit) { return Math.floor(Math.random()*limit); }
	function s(x,range) { return Math.floor(Math.sin(x)*range); }
	function rnds(x,range) { return Math.floor((Math.random())*(Math.sin(x)+1.0)*range); }


//alert(navigator.userAgent);
	var bgimg = '';		
	switch(BrowserDetect.browser) {
		case 'Chrome':
			//alert('this is chrome');
			bgimg = '-webkit-linear-gradient';
		break;
		case 'Firefox':
			//alert('this is firefox');
			bgimg = '-moz-linear-gradient';
		break;
		default: alert('your brower is not supported');
	}
		
		var tickDelay = 60/1000;	
		var tickTimeout;// = setTimeout("update()",tickDelay);
	
	
		function millis() {
			var currentTime = new Date();
			return currentTime.getTime();
		}
		
		var bgDom;// = getElementsByTagName('p')
	
		function initMagic() {
			if (tickTimeout) clearTimeout(tickTimeout);
			bgDom = document.getElementById('comic');
			if (bgDom) bgDom = bgDom.getElementsByTagName('span')[0];
			if (bgDom) bgDom = bgDom.getElementsByTagName('div')[0];
			update();
		}
	
		function update() {
		
			var m = millis()/1000;
			
			//document.getElementById('comic').innerHTML = m;
			var color1 = rgbToHex(s(m,255),255,255);
			var color2 = rgbToHex(s(m+3.14/2,255),255,255);
			var color3 = rgbToHex(s(m+3.14,255),255,s(m,255));
			var color4 = rgbToHex(255,s(m+3.14/2,255),255);
	
			bgDom.style.backgroundImage = bgimg+'(45deg, #'+color1+', #'+color2+', #'+color3+', #'+color4+', #ffffff)';
		
			tickTimeout = setTimeout("update()",tickDelay);
		}
