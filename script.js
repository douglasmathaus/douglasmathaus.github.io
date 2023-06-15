window.onload = function() {
    var generateBtn = document.getElementById('generate-btn');
    var qrCodeDiv = document.getElementById('qr-code');
    var urlInput = document.getElementById('url-input');
    var filenameInput = document.getElementById('filename-input');
    var downloadLink = document.getElementById('download-link');
    var downloadSuccess = document.getElementById('download-success');
  
    generateBtn.addEventListener('click', function() {
      var text = urlInput.value;
      var filename = filenameInput.value || "qr_code";
  
      // Remove o QR code anterior, se houver
      while (qrCodeDiv.firstChild) {
        qrCodeDiv.removeChild(qrCodeDiv.firstChild);
      }
  
      // Gera o novo QR code
      var qr = new QRious({
        element: qrCodeDiv,
        value: text,
        size: 400
      });
  
      // Atualiza o link de download
      downloadLink.href = qr.toDataURL("image/jpeg");
      downloadLink.download = filename + ".jpg";
      downloadLink.style.display = 'block';
    });
  
    downloadLink.addEventListener('click', function() {
      downloadLink.style.display = 'none';
      downloadSuccess.style.display = 'block';
      setTimeout(function() {
        downloadSuccess.style.display = 'none';
        urlInput.value = '';
        filenameInput.value = '';
        qrCodeDiv.innerHTML = '';
      }, 5000);
    });
  };
  
