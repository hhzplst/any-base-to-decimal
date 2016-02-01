$(function(){
  var number, base;
  $("form#anyBaseToDec").on("submit", function(){
    $("div#result").empty();
    $(this).serializeArray().forEach(function(el){
      if(el.name==="number") number = el.value;
      if(el.name==="base") base = el.value;
    });
    $("div#result").append("<br><h3>The Decimal Equivalent of " + number + " in Base " + base + " is " + anyBaseToDec(base,number) + "</h3>");
    $("input[name='base']").val("");
    $("input[name='number']").val("");
  });
});

//A JS function that converts binary and octal to decimal
function anyBaseToDec(base, number){
  var index = 0, result = 0, currentDigit;
  var hexLookUp = {"A":10, "B":11, "C":12, "D":13, "E":14, "F":15};
  return number.toString().split("").reverse().reduce(function(start, el, i){
    if(hexLookUp[el]) start+=hexLookUp[el]*Math.pow(base, i);
    else start+=parseInt(el)*Math.pow(base,i);
    return start;
  }, 0);

}

  // while(number>=1){
  //   currentDigit = number%10;
  //   result += currentDigit * Math.pow(base, index);
  //   index++;
  //   number = Math.trunc(number/10);
  // }
  // return result;