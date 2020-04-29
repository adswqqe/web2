var asd ={
	temp:0,
	InputList: new Array(),
	result:0,
	numberCounter:0,
	operatorCounter:0,
	isReset:false,
	DisplayNumber:function(self){
		if(asd.isReset)
		{
			document.getElementById("display").innerHTML = "";
			asd.isReset = false;
		}
		asd.temp += self.value;
		document.getElementById("display").innerHTML += self.value;
	},
	DisplayOperator:function(self){
		asd.InputList.push(asd.temp);
		asd.InputList.push(self.value);
		asd.numberCounter++;
		asd.operatorCounter++;
		asd.temp = 0;
		document.getElementById("display").innerHTML += self.value;
	},
	CalcNumber:function(self){
		if(asd.temp > 0)
		{
			asd.InputList.push(asd.temp);
			asd.numberCounter++;
			asd.temp = 0;
		}
		if(!(asd.operatorCounter+1 == asd.numberCounter))
		{
			alert('수식에러');
			asd.numberCounter = 0;
			asd.operatorCounter = 0;
			asd.isReset = true;
			asd.InputList = new Array();
			document.getElementById("display").innerHTML = result;
		}


		var finalResult = 0;

		while(asd.InputList.length != 0)
		{
			if(asd.InputList.indexOf('*') != -1)
			{
				var index = asd.InputList.indexOf('*');
				var tempIndex = 0;
				if(index == 1)
					tempIndex = index +2;
				else
					tempIndex = index;
					if(index + 1 < asd.InputList.length)
					{
						var tempList = asd.InputList.splice(index-1, tempIndex);
						finalResult =  parseFloat(tempList[0]) * parseFloat(tempList[2]);
						console.log(tempList);
						console.log(asd.InputList);
						console.log(finalResult);
						asd.InputList.splice(index-1, 0, finalResult);
						console.log(asd.InputList);
					}
			}
			else if(asd.InputList.indexOf('/') != -1){
				var index = asd.InputList.indexOf('/');
				var tempIndex = 0;
				if(index == 1)
					tempIndex = index +2;
				else
					tempIndex = index;
					if(index + 1 < asd.InputList.length)
					{
						var tempList = asd.InputList.splice(index-1, tempIndex);
						finalResult =  parseInt(tempList[0]) / parseInt(tempList[2]);
						console.log(tempList);
						console.log(asd.InputList);
						console.log(finalResult);
						asd.InputList.splice(index-1, 0, finalResult);
						console.log(asd.InputList);
					}
			}
			else
			{
				var tempList = asd.InputList.splice(0);
				var leftNumber = 0;
				var rightNumber = 0;
				var operator = '';
				var result = 0;
				while(tempList.length != 0)
				{
					var element = tempList.shift();

					if(isNaN(parseFloat(element)))
						operator = element;
					else
					{
						if(Math.abs(leftNumber) <= 0)
						{
							leftNumber = parseFloat(element);
							console.log(leftNumber);

						}
						else
						{
							rightNumber = parseFloat(element)

							switch(operator)
							{
								case '+':
								result = leftNumber + rightNumber;
								break;
								case '-':
								result = leftNumber - rightNumber;
								break;
							}
							if(tempList.length != 0)
								tempList.unshift(result);
							else
								finalResult = result;
							console.log(tempList);
							leftNumber = 0;
							rightNumber =0;
						}
					}
					console.log(tempList);
				}
			}
		}
		asd.numberCounter = 0;
		asd.operatorCounter = 0;
		asd.isReset = true;
		document.getElementById("display").innerHTML = finalResult;
	}
};