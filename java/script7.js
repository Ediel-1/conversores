var ones_numerals = new Array();
ones_numerals[0] = "";
ones_numerals[1] = "I";
ones_numerals[2] = "II";
ones_numerals[3] = "III";
ones_numerals[4] = "IV";
ones_numerals[5] = "V";
ones_numerals[6] = "VI";
ones_numerals[7] = "VII";
ones_numerals[8] = "VIII";
ones_numerals[9] = "IX";
var tens_numerals = new Array();
tens_numerals[0] = "";
tens_numerals[1] = "X";
tens_numerals[2] = "XX";
tens_numerals[3] = "XXX";
tens_numerals[4] = "XL";
tens_numerals[5] = "L";
tens_numerals[6] = "LX";
tens_numerals[7] = "LXX";
tens_numerals[8] = "LXXX";
tens_numerals[9] = "XC";
var hundreds_numerals = new Array();
hundreds_numerals[0] = "";
hundreds_numerals[1] = "C";
hundreds_numerals[2] = "CC";
hundreds_numerals[3] = "CCC";
hundreds_numerals[4] = "CD";
hundreds_numerals[5] = "D";
hundreds_numerals[6] = "DC";
hundreds_numerals[7] = "DCC";
hundreds_numerals[8] = "DCCC";
hundreds_numerals[9] = "CM";
var thousands_numerals = new Array();
thousands_numerals[0] = "";
thousands_numerals[1] = "M";
thousands_numerals[2] = "MM";
thousands_numerals[3] = "MMM";
function checkNumber(number)
{
if((parseInt(number) < 4000) && (parseInt(number) > 0))
{
var numeral = createNumeral(number);
if(numeral.indexOf('undefined') == -1)
{
window.document.form.numeral.value = numeral;
}
}else{
alert('Bebes entrar un número válido');
}
}
function createNumeral(num){
var new_num = num
var thousands = Math.floor(new_num / 1000);
new_num -= thousands * 1000;
var hundreds = Math.floor(new_num / 100);
new_num -= hundreds * 100;
var tens = Math.floor(new_num / 10);
new_num -= tens * 10;
var ones = Math.floor(new_num / 1);
if((thousands == NaN)||(hundreds == NaN)||(tens == NaN)||(ones == NaN))
{
alert('you must enter a valid number');
}else{
var array = new Array(thousands,hundreds,tens,ones);
return makeNumeral(array);
}
}
function makeNumeral(place_values)
{
var numeral = "";
numeral += thousands_numerals[place_values[0]];
numeral += hundreds_numerals[place_values[1]];
numeral += tens_numerals[place_values[2]];
numeral += ones_numerals[place_values[3]];
return numeral;
}