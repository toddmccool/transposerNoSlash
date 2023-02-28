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
    line = line.replace(/[yY]ea/g, "yahl-ee");
    line = line.replace(/[sS]he/g, "shahl-ee");
    line = line.replace(/ae/g, "eh");
    line = line.replace(/are/g, "ehr");
    line = line.replace(/ay/g, "eh");
    line = line.replace(/age/g, "ehg");
    line = line.replace(/ake/g, "ehg");
    line = line.replace(/ate/g, "eht");

    line = line.replace(/ea/g, "yehL");
    line = line.replace(/ee/g, "yehL");
    line = line.replace(/ede/g, "yehLd");

    line = line.replace(/in/g, "yayn");
    line = line.replace(/ite/g, "ah-eed");
    line = line.replace(/igh/g, "ah-ee");
    line = line.replace(/I/g, "ah-ee");
    line = line.replace(/y/g, "ah-ee");
    line = line.replace(/ime/g, "ah-eem");

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
    line = line.replace(/ee/g, "yehL");
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
    line = line.replace(/some/g, "zong");
    line = line.replace(/Some/g, "Zong");
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
    line = line.replace(/yea/g, "hYoLn");
    line = line.replace(/ev/g, "hoov");
    line = line.replace(/ool/g, "oal");
    line = line.replace(/you'll/g, "yoal");
    line = line.replace(/rule/g, "roal");
    line = line.replace(/ir/g, "or");
    line = line.replace(/ord/g, "on");
    line = line.replace(/ing/g, "oong");
    line = line.replace(/you/g, "yong");
    line = line.replace(/ix/g, "ehx");
    line = line.replace(/ing/g, "ehng");
    line = line.replace(/le\b/g, "uhLng");
    line = line.replace(/is/g, "ehz");
    line = line.replace(/Is/g, "ehz");
    line = line.replace(/all/g, "ohL");
    line = line.replace(/All/g, "ohL");
    line = line.replace(/she/g, "shoob");
    line = line.replace(/I've/g, "oy've");
    line = line.replace(/I'll/g, "oy'm");
    line = line.replace(/i/g, "eh");
    line = line.replace(/ot/g, "ohL");
    line = line.replace(/om/g, "ohLm");
    line = line.replace(/e/g, "ohL");
    line = line.replace(/a/g, "oo-eh");
    line = line.replace(/ee/g, "eh");
    line = line.replace(/I /g, "oy");
    line = line.replace(/y/g, "oy");
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
    line = line.replace(/oo/g, "eh");
    line = line.replace(/such/g, "solj");
    line = line.replace(/Such/g, "solj");
    line = line.replace(/on/g, "(n)oLn");
    line = line.replace(/On/g, "(n)oLn");
    line = line.replace(/yea/g, "hYoLn");
    line = line.replace(/ev/g, "hoov");
    line = line.replace(/ool/g, "oal");
    line = line.replace(/you'll/g, "yoal");
    line = line.replace(/rule/g, "roal");
    line = line.replace(/ir/g, "or");
    line = line.replace(/ord/g, "on");
    line = line.replace(/ing/g, "oong");
    line = line.replace(/you/g, "yong");
    line = line.replace(/ix/g, "ehx");
    line = line.replace(/ing/g, "ehng");
    line = line.replace(/le\b/g, "uhLng");
    line = line.replace(/is/g, "ehz");
    line = line.replace(/Is/g, "ehz");
    line = line.replace(/all/g, "ohL");
    line = line.replace(/All/g, "ohL");
    line = line.replace(/she/g, "shoob");
    line = line.replace(/I've/g, "oy've");
    line = line.replace(/I'll/g, "oy'm");
    line = line.replace(/i/g, "eh");
    line = line.replace(/ot/g, "oh");
    line = line.replace(/om/g, "ohm");
    line = line.replace(/e/g, "oh");
    line = line.replace(/a/g, "oo-eh");
    line = line.replace(/ee/g, "eh");
    line = line.replace(/I /g, "oy");
    line = line.replace(/y/g, "oy");
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
    translatedLines.push(line);
  }

  return translatedLines.join("\n");
}
