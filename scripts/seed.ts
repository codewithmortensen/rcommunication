import employees from '@/app/data/employees';
import { VercelPoolClient, db } from '@vercel/postgres';

const seedEmployees = async (client: VercelPoolClient) => {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS employee (
        employee_id VARCHAR(10) PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(10) CHECK (gender IN ('Male', 'Female')),
        phone VARCHAR(15) NOT NULL,
        email VARCHAR(100) NOT NULL,
        address VARCHAR(255) NOT NULL,
        job_title VARCHAR(100) NOT NULL,
        status VARCHAR(50) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        day_off VARCHAR(10) CHECK (dey_off IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
    );
    `;
    console.log(`Created "Employee" table`);

    // inserting dat into the employee table
    const insertEmployees = await Promise.all(
      employees.map((employee) => {
        client.sql`INSERT INTO employee (employee_id, first_name, last_name, birth_date, gender, phone, email, address, job_title, status, salary, day_off, start_time, end_time)
        VALUES(${employee.employee_id}, ${employee.first_name}, ${
          employee.last_name
        },${!!employee.birth_date} ,${employee.gender}, ${employee.phone}, ${
          employee.email
        }, ${employee.address}, ${employee.job_title}, ${employee.status}, ${
          employee.salary
        }, ${
          employee.dey_off
        }, ${!!employee.end_time}) ON CONFLICT (employee_id) DO NOTHING`;
      })
    );
    console.log('Inserting employees data');
    return {
      createTable,
      employees: insertEmployees,
    };
  } catch (error) {
    console.log('Error', error);
  }
};

const main = async () => {
  const client = await db.connect();
  await seedEmployees(client);
};

main().catch((error) =>
  console.error('an error occurred while populating the database', error)
);
