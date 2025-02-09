import sqlite3

connection = sqlite3.connect("hr.db")
cursor = connection.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS Employees(
                employee_id INT,
                name TEXT,
                position TEXT)''')
connection.commit()
connection.close()