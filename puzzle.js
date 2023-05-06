var answer = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var count = 0;

function guessLetter() {
 var guess = document.getElementById("guess").value.toLowerCase();
 if (guess.length !== 1 || !/[a-z]/.test(guess)) {
  document.getElementById("result").innerHTML = "请输入一个字母。";
 } else if (guess === answer) {
  count++;
  document.getElementById("result").innerHTML = "恭喜你，猜对了！你用了" + count + "次机会。";
  document.getElementById("guess").disabled = true;
  document.getElementsByTagName("input")[1].disabled = true;
 } else {
  count++;
  if (count === 10) {
   document.getElementById("result").innerHTML = "很遗憾，你用完了10次机会。正确答案是" + answer + "。";
   document.getElementById("guess").disabled = true;
   document.getElementsByTagName("input")[1].disabled = true;
  } else {
   var hint = guess < answer ? "排列在" + guess + "之后": "排列在" + guess + "之前";
   document.getElementById("result").innerHTML = "你猜错了，正确答案" + hint + "。你还有" + (10 - count) + "次机会。";
   document.getElementById("guess").value = "";
   document.getElementById("guess").focus();
  }
 }
 document.getElementById("count").innerHTML = count;
}
