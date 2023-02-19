const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

document.getElementById("replaceBtn").addEventListener("click", function () {
  let text = textInput.value;
  text = text.replace(/you/g, "yong");
  text = text.replace(/ix/g, "ehx");
  text = text.replace(/ing/g, "ehng");
  text = text.replace(/le\b/g, "uhLng");
  text = text.replace(/is/g, "ehz");
  text = text.replace(/Is/g, "ehz");
  text = text.replace(/all/g, "ohL");
  text = text.replace(/All/g, "ohL");
  text = text.replace(/she/g, "sheh");
  text = text.replace(/I've/g, "oy've");
  text = text.replace(/I'll/g, "oy'm");
  text = text.replace(/i/g, "eh");
  text = text.replace(/ot/g, "oh");
  text = text.replace(/om/g, "ohm");
  text = text.replace(/e/g, "oh");
  text = text.replace(/a/g, "eh");
  text = text.replace(/ee/g, "eh");
  text = text.replace(/I /g, "oy");
  text = text.replace(/y/g, "oy");
  text = text.replace(/from/g, "frung");
  text = text.replace(/oo/g, "eh");
  text = text.replace(/ou/g, "eh");
  text = text.replace(/ow/g, "eh");
  text = text.replace(/ad/g, "ungd");
  text = text.replace(/I'm/g, "oy'm");
  text = text.replace(/and/g, "ehnd");
  text = text.replace(/And/g, "Ehnd");

  //  text = text.replace(/\b\w*from\w*\b|\bfrom\w*\b/g, "frung' ");
  //  text = text.replace(/\b\w*oo\w*\b|\boo\w*\b/g, "eh' ");
  //  text = text.replace(/\b\w*ou\w*\b|\bou\w*\b/g, "eh' ");
  //  text = text.replace(/\b\w*ow\w*\b|\bow\w*\b/g, "eh' ");
  //  text = text.replace(/\b\w*ad\w*\b|\bad\w*\b/g, "ungd' ");

  output.innerHTML = text;
});
