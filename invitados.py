import re
import json
import sqlite3

def parse_js_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Extraer el array de objetos
    match = re.search(r'const\s+listaInvitados\s*=\s*(\[[\s\S]*?\]);', content)
    if match:
        array_str = match.group(1)
        # Añadir comillas a las claves
        array_str = re.sub(r'(\w+):', r'"\1":', array_str)
        # Reemplazar comillas simples por dobles
        array_str = array_str.replace("'", '"')
        return json.loads(array_str)
    else:
        return []

def is_valid_name(name):
    invalid_names = ['hijo', 'hija', 'esposo', 'esposa', 'acompañante', 'novio', 'novia']
    return name.lower() not in invalid_names

def create_sqlite_db(invitados):
    conn = sqlite3.connect('guests.db')
    c = conn.cursor()

    # Crear tabla
    c.execute('''CREATE TABLE IF NOT EXISTS invitados 
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                  nombre TEXT, 
                  mesa TEXT, 
                  presente BOOLEAN DEFAULT 0)''')

    # Limpiar tabla existente
    c.execute('DELETE FROM invitados')

    # Insertar invitados filtrados
    for invitado in invitados:
        if is_valid_name(invitado['nombre']):
            c.execute('INSERT INTO invitados (nombre, mesa) VALUES (?, ?)',
                      (invitado['nombre'], invitado['mesa']))

    conn.commit()
    conn.close()

# Leer el archivo de invitados
invitados = parse_js_file('invitados.js')

# Crear base de datos SQLite
create_sqlite_db(invitados)

print("Base de datos SQLite creada con éxito: guests.db")