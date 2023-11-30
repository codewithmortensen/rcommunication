'use client';
import useAttendances from './hooks/useAttendances';

const HomePage = () => {
  const { data } = useAttendances();
  return (
    <div>
      <ul>
        {data?.map((d) => (
          <li key={d.attendanceID}>{d.entryStatus}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
