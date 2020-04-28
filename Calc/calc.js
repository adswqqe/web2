var asd ={
	numberList: new Array(),
	operatorList: new Array(),
	calcNumberList: new Array(),
	isOperator:false,
	temp:0,
	numberListIndex:0,
	isFrist:true,
	isRfrist:true,
	isLastOperatorMultiorDivide:false,
	LastOperator:'',
	leftNumber:0,
	rightNumber:0,
	isLeft:true,
	DisplayNumber:function(self){
		// if(asd.isRfrist)
		// {
		// 	asd.numberList.push(0);
		// 	isRfrist =false;
		// }
		if(asd.isLeft)
			asd.leftNumber += self.value;
		else
			asd.rightNumber += self.value;
		//console.log(asd.numberList[asd.numberListIndex]);
		document.getElementById("display").innerHTML += self.value;
	},
	DisplayOperator:function(self){
		if(!asd.isLeft)
		{
			switch (asd.LastOperator){
				case '+':
				asd.temp =  parseInt(asd.leftNumber) + parseInt(asd.rightNumber);
				break;
				case '-':
				asd.temp =  parseInt(asd.leftNumber) - parseInt(asd.rightNumber);
				break;
				case '*':
				asd.temp =  parseInt(asd.leftNumber) * parseInt(asd.rightNumber);
				break;
				case '/':
				asd.temp =  parseInt(asd.leftNumber) / parseInt(asd.rightNumber);
				break;
			}
			asd.leftNumber = 0;
			asd.rightNumber = 0;
			asd.isLeft = true;
			console.log(asd.temp);
			asd.calcNumberList.push(asd.temp);
			asd.temp = 0;
		}
		else
			asd.isLeft = false;

		// if(asd.isLastOperatorMultiorDivide && asd.numberListIndex >= 1)
		// 	{temp = asd.numberList[asd.numberListIndex-1] * asd.numberList[asd.numberListIndex];
		// 		console.log(temp);
		// 	}

		// if((self.value === '*' || self.value === '/'))
		// 	asd.isLastOperatorMultiorDivide = true;
		asd.LastOperator = self.value;
		asd.isFrist = false;
		//asd.numberListIndex +=1;

		//asd.operatorList.push(self.value);
		document.getElementById("display").innerHTML += self.value;
	},
	CalcNumber:function(self){
		var i = 0;
		var result = 0;
		     console.log(asd.operatorList.length);
		while(asd.operatorList.length > i)
		{
		     console.log(asd.operatorList[i]);
			if(asd.operatorList[i] === '+')
				result = asd.leftNumber + asd.rightNumber;

			asd.operatorList.shift();
			i += 1;
		}
		asd.isOperator = false;

		document.getElementById("display").innerHTML = (new Function('return' + '1+1'))();
	}
};