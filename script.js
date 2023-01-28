function transpose() {
  var text = document.getElementById("textInput").value;
  var transNumbers = {
    "G#": 0.5,
    Ab: 0.5,
    A: 1,
    "A#": 1.5,
    Bb: 1.5,
    B: 2,
    C: 3,
    "C#": 3.5,
    Db: 3.5,
    D: 4,
    "D#": 4.5,
    Eb: 4.5,
    E: 5,
    F: 6,
    "F#": 6.5,
    Gb: 6.5,
    G: 7,
  };
  var key = "";
  var match;
  var re =
    /(([A-G][#b]?)([ ]{3,})|(([A-G][#b]?)(\/)([A-G][#b]?))(?![A-G][#b]?))/g;
  var nums = [];
  while ((match = re.exec(text))) {
    var transNum = transNumbers[match[2] || match[5]];
    if (transNum) {
      nums.push(transNum);
    } else if (transNumbers[match[8]] && transNum !== transNumbers[match[8]]) {
      nums.push(transNumbers[match[8]]);
    }
  }
  if (nums.includes(4) && nums.includes(5)) {
    key = "key of A";
  } else if (nums.includes(1) && nums.includes(2)) {
    key = "key of E";
  } else if (nums.includes(6) && nums.includes(7)) {
    key = "key of C";
  } else if (nums.includes(3) && nums.includes(4)) {
    key = "key of G";
  } else if (nums.includes(7) && nums.includes(1)) {
    key = "key of D";
  } else if (nums.includes(1.5) && nums.includes(3)) {
    key = "key of F";
  } else if (nums.includes(4.5) && nums.includes(6)) {
    key = "key of Bb";
  } else if (nums.includes(5) && nums.includes(6.5)) {
    key = "key of B";
  } else if (nums.includes(0.5) && nums.includes(1.5)) {
    key = "key of Eb (D#)";
  } else if (nums.includes(3.5) && nums.includes(4.5)) {
    key = "key of Ab (G#)";
  } else if (nums.includes(6.5) && nums.includes(0.5)) {
    key = "key of Db (C#)";
  } else if (nums.includes(2.5) && nums.includes(3.5)) {
    key = "key of Gb (F#)";
  } else {
    key = "Not found";
  }

  alert(key);
}
