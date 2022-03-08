function displayTime() {
  const inputValue = document.getElementById("inp").value;
  console.log(inputValue);
  document.getElementById("demo").innerHTML = inputValue;
  document.getElementById("inp").value = "";
}
