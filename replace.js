const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

document.getElementById("replaceBtn").addEventListener("click", function () {
  const inputText = textInput.value;
  const translatedText = replaceVowels(inputText);

  const inputLines = inputText.split(/\r?\n/);
  const translatedLines = translatedText.split(/\r?\n/);

  let result = "";
  for (let i = 0; i < inputLines.length; i++) {
    result += inputLines[i] + "<br>" + translatedLines[i] + "<br><br>";
  }

  output.innerHTML = result;
});

function replaceVowels(inputText) {
  let lines = inputText.split("\n");
  let translatedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    //youtube ken additions
    line = line.replace(/ee/g, "yehL");
    line = line.replace(/real/g, "ryehL");
    line = line.replace(/be/g, "byehL");
    line = line.replace(/me/g, "myehL");
    line = line.replace(/[yY]ea/g, "hYahl-ee");
    line = line.replace(/[sS]he/g, "shahl-ee");
    line = line.replace(/ae/g, "eh");
    line = line.replace(/are/g, "ehr");
    line = line.replace(/ay/g, "eh");
    line = line.replace(/age/g, "ehg");
    line = line.replace(/ake/g, "ehg");
    line = line.replace(/ate/g, "eht");

    line = line.replace(/each/g, "yehLj");
    line = line.replace(/ede/g, "yehLd");

    line = line.replace(/in/g, "yayn");
    line = line.replace(/ite/g, "ahl-eed");
    line = line.replace(/igh/g, "ahl-ee");
    line = line.replace(/I/g, "ahl-ee");
    //line = line.replace(/y/g, "ahl-ee");
    line = line.replace(/ime/g, "ahl-eem");

    line = line.replace(/ome/g, "oom");
    line = line.replace(/us/g, "ehz");

    line = line.replace(/oe/g, "yoohL");
    line = line.replace(/oa/g, "yoohL");
    line = line.replace(/or/g, "yoorL");
    line = line.replace(/ove/g, "yoohLv");
    line = line.replace(/on/g, "yoohLN");
    line = line.replace(/On/g, "yoohLN");
    line = line.replace(/show/g, "shyoohL");

    line = line.replace(/me/g, "mah-ee");
    line = line.replace(/ede/g, "yehLd");

    line = line.replace(/oug/g, "awh");
    line = line.replace(/au/g, "awh");
    line = line.replace(/ot/g, "awh");
    line = line.replace(/ought/g, "awhd");
    line = line.replace(/aught/g, "awhd");

    //old here
    line = line.replace(/ate/g, "eht");
    line = line.replace(/ai/g, "eh");
    line = line.replace(/it/g, "yold");
    line = line.replace(/it/g, "old");
    line = line.replace(/It/g, "Old");
    line = line.replace(/go/g, "gong");
    line = line.replace(/Go/g, "Gong");
    line = line.replace(/[sS]ome/g, "zong");
    line = line.replace(/city/g, "zoodoo");
    line = line.replace(/City/g, "Zoodoo");
    line = line.replace(/here/g, "hohr");
    line = line.replace(/Here/g, "Hohr");
    line = line.replace(/voices/g, "voLzuz");
    line = line.replace(/Voices/g, "VoLzuz");
    line = line.replace(/choi/g, "joL");
    line = line.replace(/Choi/g, "joL");
    line = line.replace(/oo/g, "eh");
    line = line.replace(/oo/g, "eh");
    line = line.replace(/such/g, "solj");
    line = line.replace(/Such/g, "solj");
    line = line.replace(/on/g, "(n)oLn");
    line = line.replace(/On/g, "(n)oLn");

    line = line.replace(/ool/g, "oal");
    line = line.replace(/you'll/g, "yoal");
    line = line.replace(/rule/g, "roal");
    line = line.replace(/ord/g, "on");
    line = line.replace(/ing/g, "oong");
    line = line.replace(/ing/g, "ehng");
    line = line.replace(/le\b/g, "uhLng");
    line = line.replace(/[iI]s/g, "ehz");
    line = line.replace(/[aA]ll/g, "ohL");
    line = line.replace(/she/g, "shoob");
    line = line.replace(/I'll/g, "oy'm");
    line = line.replace(/i/g, "eh");
    line = line.replace(/ot/g, "ohL");
    // line = line.replace(/om/g, "ohLm");
    // line = line.replace(/e/g, "ohL");
    // line = line.replace(/a/g, "oo-eh");
    line = line.replace(/I /g, "oy");
    line = line.replace(/my /g, "moy");
    // line = line.replace(/\by\s/g, "oy ");

    line = line.replace(/from/g, "frung");

    // line = line.replace(/ou/g, "eh");
    //line = line.replace(/ow/g, "eh");
    line = line.replace(/ad/g, "ungd");
    line = line.replace(/I'm/g, "oy'm");

    line = line.replace(/[aA]nd/g, "uh-Ehnd");

    line = line.replace(/[tT]/g, "d");

    line = line.replace(/[pP]/g, "b");
    line = line.replace(/k/g, "g");

    line = line.replace(/[cC]eh/g, "Geh");
    line = line.replace(/cu/g, "gu");
    line = line.replace(/ca/g, "gu");

    line = line.replace(/[cC]o/g, "gu");
    line = line.replace(/[qQ]u/g, "Gu");
    line = line.replace(/gh/g, "");
    line = line.replace(/[sS]/g, "z");
    line = line.replace(/oo/g, "eh");
    line = line.replace(/[sS]uch/g, "solj");
    line = line.replace(/[oO]n/g, "(n)oLn");

    line = line.replace(/ev/g, "hoov");
    line = line.replace(/ir/g, "or");
    line = line.replace(/ord/g, "on");
    line = line.replace(/you/g, "yong");
    line = line.replace(/ix/g, "ehLx");
    line = line.replace(/ing/g, "ehng");
    line = line.replace(/le\b/g, "uhLng");
    line = line.replace(/[iI]s/g, "ehz");
    line = line.replace(/[aA]ll/g, "ohL");
    line = line.replace(/I've/g, "oy've");
    line = line.replace(/I'll/g, "oy'm");
    line = line.replace(/i/g, "eh");
    line = line.replace(/ot/g, "oh");
    // line = line.replace(/om/g, "ohm");
    //line = line.replace(/e/g, "oh");
    // line = line.replace(/a/g, "oo-eh");
    line = line.replace(/I /g, "oy");
    line = line.replace(/from/g, "frung");

    line = line.replace(/ou/g, "eh");
    line = line.replace(/ow/g, "eh");
    line = line.replace(/ad/g, "ungd");
    line = line.replace(/I'm/g, "oy'm");
    line = line.replace(/and/g, "uh-ehnd");
    line = line.replace(/And/g, "uh-Ehnd");
    line = line.replace(/t/g, "d");
    line = line.replace(/T/g, "d");
    line = line.replace(/p/g, "b");
    line = line.replace(/P/g, "b");
    line = line.replace(/k/g, "g");
    line = line.replace(/ceh/g, "geh");
    line = line.replace(/Ceh/g, "Geh");
    line = line.replace(/cu/g, "gu");
    line = line.replace(/ca/g, "gu");
    line = line.replace(/co/g, "gu");
    line = line.replace(/Co/g, "gu");
    line = line.replace(/qu/g, "gu");
    line = line.replace(/Qu/g, "Gu");
    line = line.replace(/gh/g, "");
    line = line.replace(/s/g, "z");
    line = line.replace(/S/g, "z");
    line = line.replace(/dh/g, "th");
    line = line.replace(/Dh/g, "th");
    line = line.replace(/zehx/g, "zehLx");

    line = line.replace(/ezz/g, "eLzz");
    line = line.replace(/eh/g, "ehL");

    translatedLines.push(line);
  }

  return translatedLines.join("\n");
}
