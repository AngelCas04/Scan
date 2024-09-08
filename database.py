import sqlite3

def get_guests():
    conn = sqlite3.connect('guests.db')
    c = conn.cursor()
    c.execute('SELECT * FROM invitados')
    guests = c.fetchall()
    conn.close()
    return guests

def mark_guest_as_present(guest_id):
    conn = sqlite3.connect('guests.db')
    c = conn.cursor()
    c.execute('UPDATE invitados SET presente = 1 WHERE id = ?', (guest_id,))
    conn.commit()
    conn.close()
    return True

def get_guest_by_id(guest_id):
    conn = sqlite3.connect('guests.db')
    c = conn.cursor()
    c.execute('SELECT * FROM invitados WHERE id = ?', (guest_id,))
    guest = c.fetchone()
    conn.close()
    return guest

if __name__ == "__main__":
    print(get_guests())