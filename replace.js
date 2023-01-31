const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

document.getElementById("replaceBtn").addEventListener("click", function () {
  let text = textInput.value;
  text = text.replace(/ the /g, "dis' ");
  text = text.replace(/ your/g, "that hoe's");
  text = text.replace(/ you/g, "them hoes");
  text = text.replace(/ falling in love /g, "eating Ass ");
  text.replace(/Falling in love /g, "eating Ass ");

  text = text.replace(/ fallin\sin\slove /g, "eatin Ass ");
  text = text.replace(/Fallin\sin\slove /g, "Eatin Ass ");
  text = text.replace(/ love/g, "ass");
  text = text.replace(/Love/g, "Ass");
  text = text.replace(/ assd/g, "spanked");
  text = text.replace(/ good/g, "tight");
  text = text.replace(/I ass/g, "i'd bang");
  text = text.replace(/ ass me/g, "spank me");
  text = text.replace(/ heart/g, "deeYock");
  text = text.replace(/ babe/g, "beeYotch");

  text = text.replace(/ talk to/g, "fart on");
  text = text.replace(/ talking to/g, "farting on");
  text = text.replace(/ on them hoes/g, "on you");
  text = text.replace(/ spankout/g, "without");

  text = text.replace(/\b(a|A)\b/g, "a fuckin");
  output.innerHTML = text;
});
