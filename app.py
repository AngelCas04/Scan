from flask import Flask, render_template, jsonify, redirect, url_for, request
from database import get_guests, mark_guest_as_present, get_guest_by_id
import qrcode
import io
import base64
import os

app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('admin'))

@app.route('/admin')
def admin():
    guests = get_guests()
    guests_with_qr = []
    for guest in guests:
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(str(guest[0]))  # Usando el ID del invitado como datos del QR
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        
        buffered = io.BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        guests_with_qr.append(guest + (img_str,))
    
    return render_template('admin.html', guests=guests_with_qr)

@app.route('/scan')
def scan():
    return render_template('scan.html')

@app.route('/verify_attendance', methods=['POST'])
def verify_attendance():
    guest_id = request.json['guest_id']
    guest = get_guest_by_id(guest_id)
    if guest:
        if not guest[3]:  # Si el invitado no está marcado como presente
            mark_guest_as_present(guest_id)
            return jsonify({'success': True, 'message': f'Bienvenido, {guest[1]}! Tu asistencia ha sido registrada.', 'alreadyPresent': False})
        else:
            return jsonify({'success': True, 'message': f'{guest[1]}, tu asistencia ya había sido registrada anteriormente.', 'alreadyPresent': True})
    return jsonify({'success': False, 'message': 'Invitado no encontrado.'})

@app.route('/mark_present/<int:guest_id>', methods=['POST'])
def mark_present(guest_id):
    success = mark_guest_as_present(guest_id)
    return jsonify({'success': success})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)