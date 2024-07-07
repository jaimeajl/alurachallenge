function encryptText() {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  const encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
  document.getElementById("result").textContent = encryptedText;
}

function decryptText() {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  const decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
  document.getElementById("result").textContent = decryptedText;
}
