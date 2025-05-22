import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3307,
  database: "eshop",
  password: "example_root_password",
});

export async function getEmployees() {
  // A simple SELECT query
  return (
    await connection.query(
      `
    SELECT 
        25*98				AS the_multiplication_ratio, 
        CURRENT_TIMESTAMP,
        firstName, 
        lastName, 
        city 
    FROM employees
    WHERE status = 1
    ORDER BY firstName
    LIMIT 2, 5
    `
    )
  )[0];
}

export function insertEmployee({
  id,
  firstName,
  lastName,
  street,
  city,
  status,
}) {
  return connection.query(
    `
        INSERT INTO employees (employeeID, firstName, lastName, streetAddress, city, status)
        VALUES 
            (?, ?, ?, ?, ?, ?)
        `,
    [id, firstName, lastName, street, city, status]
  );
}
