// static/js/qr_scanner.js
function initializeQRScanner() {
    const html5QrCode = new Html5Qrcode("qr-reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        console.log(`Código QR detectado: ${decodedText}`);
        markGuestAsPresent(decodedText);
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}

function markGuestAsPresent(qrCode) {
    fetch('/mark_present', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qr_code: qrCode }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Invitado ${data.guest} marcado como presente`);
            // Actualizar la tabla de invitados (esto requeriría una implementación adicional)
        } else {
            alert('Error al marcar al invitado como presente: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}