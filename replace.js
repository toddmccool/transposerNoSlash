const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

document.getElementById("replaceBtn").addEventListener("click", function () {
  let text = textInput.value;
  text = text.replace(/the/g, "the stupid");
  text = text.replace(/your/g, "that hoe's");
  text = text.replace(/you/g, "them hoes");
  text = text.replace(/love/g, "ass");
  text = text.replace(/Love/g, "Ass");

  text = text.replace(/falling\sin\slove\swith/g, "eating dat Ass of");
  text = text.replace(/Falling\sin\slove\swith/g, "Eating dat Ass of");

  text = text.replace(/fallin\sin\slove with/g, "eatin dat Ass of");
  text = text.replace(/Fallin\sin\slove with/g, "Eatin dat Ass of");

  text = text.replace(/\b(a|A)\b/g, "fuckin");
  output.innerHTML = text;
});
