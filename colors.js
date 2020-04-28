var Links = {
			setColor:function(color){
			var aTag = document.getElementsByTagName('a');
			var atagLength = aTag.length;
			for (var i = atagLength - 1; i >= 0; i--) {
				aTag[i].style.color=color;
				}
			}
}

var Body = {
			SetColor:function (color){
			document.getElementById('target').style.color = color;
			},
			SetBackgoundColor:function(color){
			document.getElementById('target').style.backgroundColor = color;
			}

		}
		
		function nightDayHandler(self){
			var target = document.getElementById('target');

			if(self.value === 'night'){
				self.value = 'day';
				Body.SetBackgoundColor('black');
				Body.SetColor('white');
				Links.setColor('white');

			} else {
				self.value = 'night';
				Body.SetBackgoundColor('white');
				Body.SetColor('black');
				Links.setColor('blue');
			}
}