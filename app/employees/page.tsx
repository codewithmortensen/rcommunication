import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import { columns } from './components/Columns';
import employees from '../data/employees';

const EmployeePage = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-[5rem]'>
      <EmployeeTable columns={columns} data={employees} />
    </div>
  );
};

export default EmployeePage;
