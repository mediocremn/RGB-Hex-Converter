//This is my hexidecimal to RGB/RGB to hexidecimal converter program.
//This was added to Github on 07/15/2018.

//This function uses arrays to convert a hex character to its number
const hexLetterConverter = function(hexletter){

	var lowerhexletter = hexletter.toLowerCase();

	var hexArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	var numindex = hexArray.indexOf(lowerhexletter);
	var hexnumber = numArray[numindex];

	return hexnumber;
}

//This function uses arrays to convert a number to its hex character.
const rgbNumberConverter = function(rgbNumber){

	var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var hexArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

	var numindex = numArray.indexOf(rgbNumber);
	var hexletter = hexArray[numindex];

    return hexletter;
}

//This function takes a hex string & separates it into three substrings for RGB.
//Then it converts these substrings into RGB numbers by using the function above.
const hexRGBConverter = function() {

	var hexstring = document.getElementById("rgbhexinput").value;


	if (hexstring.length>6) {
		hexstring = hexstring.slice(-6);
	}

	redhexstring = hexstring.slice(0,2);
	greenhexstring = hexstring.slice(2,4);
	bluehexstring = hexstring.slice(4,6);

	redhexstring1 = redhexstring.slice(0,1);
	redhexstring2 = redhexstring.slice(1,2);

	greenhexstring1 = greenhexstring.slice(0,1);
	greenhexstring2 = greenhexstring.slice(1,2);

	bluehexstring1 = bluehexstring.slice(0,1);
	bluehexstring2 = bluehexstring.slice(1,2);

	redRGBnum = hexLetterConverter(redhexstring1)*16;
	redRGBnum = redRGBnum + hexLetterConverter(redhexstring2);
	
	greenRGBnum = hexLetterConverter(greenhexstring1)*16;
	greenRGBnum = greenRGBnum + hexLetterConverter(greenhexstring2);

	blueRGBnum = hexLetterConverter(bluehexstring1)*16;
	blueRGBnum = blueRGBnum + hexLetterConverter(bluehexstring2);

	totRGBstring = "The RGB conversion is the following: " + 
	"RGB(" + redRGBnum + "," + greenRGBnum + "," + blueRGBnum + ")";

	window.alert(totRGBstring);
	return totRGBstring;
	}

//This function takes a RGB string & separates it into three substrings for hex.
//Then it converts these substrings into hex values by using the function above.
const rgbHexConverter = function() {

	var rgbvalue = document.getElementById("rgbhexinput").value;

	var rgbstrend = rgbvalue.length - 1;
	var rgbstring = rgbvalue.slice(4,rgbstrend);

	var rgbArray = rgbstring.split(",");
	
	redRGBnum = Number(rgbArray[0]);
	greenRGBnum = Number(rgbArray[1]);
	blueRGBnum = Number(rgbArray[2]);

	redhexnum1 = Math.floor(redRGBnum/16);
	redhexnum2 = redRGBnum%16;

	redhexstring1 = rgbNumberConverter(redhexnum1);
	redhexstring2 = rgbNumberConverter(redhexnum2);

	greenhexnum1 = Math.floor(greenRGBnum/16);
	greenhexnum2 = greenRGBnum%16;

	greenhexstring1 = rgbNumberConverter(greenhexnum1);
	greenhexstring2 = rgbNumberConverter(greenhexnum2);

	bluehexnum1 = Math.floor(blueRGBnum/16);
	bluehexnum2 = blueRGBnum%16;

	bluehexstring1 = rgbNumberConverter(bluehexnum1);
	bluehexstring2 = rgbNumberConverter(bluehexnum2);

	tothexstring = "The hexadecimal conversion is the following: " + 
	"#" + redhexstring1 + redhexstring2 + greenhexstring1 +
	greenhexstring2 + bluehexstring1 + bluehexstring2;

	window.alert(tothexstring);
	return tothexstring;
	}

//This function only checks the input for hex or RGB & calls its function above.
const inputTypeChecker = function(){

	var rgbhexstring = "";
	rgbhexstring = document.getElementById("rgbhexinput").value;

	if ((rgbhexstring.charAt(0))==='#') {
		hexRGBConverter();
	} else if ((rgbhexstring.charAt(0))==='R'||(rgbhexstring.charAt(0)==='r')){
		rgbHexConverter();
	} else {
		window.alert("Please enter a valid input in the proper format.");
	}
} 
