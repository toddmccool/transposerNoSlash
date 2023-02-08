const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

document.getElementById("replaceBtn").addEventListener("click", function () {
  let text = textInput.value;

  const wordsToPreserve = [
    "every",
    "Every",
    "love",
    "if",
    "do",
    "dream",
    "you",
    "never",
    "in",
    "once",
    "believe",
    "heart",
  ];

  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (wordsToPreserve.includes(words[i])) {
      continue;
    } else {
      switch (words[i][0].toLowerCase()) {
        case "a":
          words[i] = "assHat";
          break;
        case "b":
          words[i] = "buttCheeks";
          break;
        case "c":
          words[i] = "cuntKnuckle";
          break;
        case "d":
          words[i] = "deezNuts";
          break;
        case "e":
          words[i] = "escapade";
          break;
        case "f":
          words[i] = "flapjack";
          break;
        case "g":
          words[i] = "gay";
          break;
        case "h":
          words[i] = "hempNecklace";
          break;
        default:
          break;
      }
    }
  }

  text = words.join(" ");
  output.innerHTML = text;
});
