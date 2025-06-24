let qrInstance = null;

const dataInput = document.getElementById('qr-data');
const sizeDropdown = document.getElementById('qr-dimension');
const qrDisplay = document.getElementById('qr-result');
const createBtn = document.getElementById('create-qr');
createBtn.addEventListener('click', () => {
  const content = dataInput.value.trim();
  const dimension = parseInt(sizeDropdown.value);
  qrDisplay.innerHTML = '';

  if (!content) {
    alert('Enter text or a link to create a QR code.');
    return;
  }

  qrInstance = new QRCode(qrDisplay, {
    text: content,
    width: dimension,
    height: dimension,
    colorDark: '#22223b',
    colorLight: '#f8f9fa',
    correctLevel: QRCode.CorrectLevel.M
  });
});

// Clear fields and QR code
const clearBtn = document.getElementById('clear-fields');
clearBtn.addEventListener('click', () => {
  dataInput.value = '';
  qrDisplay.innerHTML = '';
});

// Save QR code as image
const saveBtn = document.getElementById('save-qr');
saveBtn.addEventListener('click', () => {
  const qrImg = qrDisplay.querySelector('img');
  if (!qrImg) {
    alert('Please generate a QR code first.');
    return;
  }
  const downloadLink = document.createElement('a');
  downloadLink.href = qrImg.src;
  downloadLink.download = 'my-qr-code.png';
  downloadLink.click();
});
