import React from 'react';

interface Props {
  params: { id: string };
}

const EmployeeDetail = async () => {
  return (
    <div className='grid grid-cols-2 mt-10 max-w-screen-lg mx-auto'>
      <div className='overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h1 className='text-lg font-bold py-3 tracking-tighter sm:text-3xl xl:text-3xl/none bg-clip-text text-center text-transparent bg-gradient-to-r from-gray-300 to-gray-500'>
            Employee Info
          </h1>
        </div>
        <div className='border-t '>
          <dl>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Employee ID</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.employee_id} */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Full name</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.first_name} {employee?.last_name} */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Birth Date</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.birth_date.toDateString()} */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Gender</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.gender === 'FEMALE' ? 'Female' : 'Male'} */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Status</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* <EmployeeStatusBadge status={employee?.status!} /> */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Job Title</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.job_title} */}
              </dd>
            </div>
            <div className=' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 shadow-sm'>
              <dt className='text-sm font-medium'>Salary</dt>
              <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                {/* {employee?.salary.toFixed(2)} Gourdes */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
