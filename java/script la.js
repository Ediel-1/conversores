function convertform(form){
    var firstvalue = 0;
    for (var i = 1; i <= form.count; i++) {
       // Encuentra la primera entrada que no esté en blanco
       if (form.elements[i].value != null && form.elements[i].value.length != 0) {
          if (i == 1 && form.elements[2].value != "") return false;
          firstvalue = form.elements[i].value / form.elements[i].factor;
          break;
       }
    }
    if (firstvalue == 0) {
       clearform(form);
       return false;
    }
    for (var i = 1; i <= form.count; i++)
       form.elements[i].value = formatvalue((firstvalue * form.elements[i].factor), form.rsize);
    return true;
}
function formatvalue(input, rsize) {
   var invalid = "**************************";
   var nines = "999999999999999999999999";
   var strin = "" + input;
   var fltin = parseFloat(strin);
   if (strin.length <= rsize) return strin;
   if (strin.indexOf("e") != -1 ||
       fltin > parseFloat(nines.substring(0,rsize)+".4"))
      return invalid.substring(0, rsize);
   var rounded = "" + (fltin + (fltin - parseFloat(strin.substring(0, rsize))));
   return rounded.substring(0, rsize);
}
function resetform(form) {
    clearform(form);
    form.elements[1].value = 1;
    convertform(form);
    return true;
}
function clearform(form) {
    for (var i = 1; i <= form.count; i++) form.elements[i].value = "";
    return true;
}