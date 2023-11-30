'use client';

import { Attendance } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAttendances = () => {
  return useQuery({
    queryKey: ['attendances'],
    queryFn: () =>
      axios
        .get<Attendance[]>('http://localhost:3000/api/attendances')
        .then((res) => res.data),
    staleTime: 24 * 60 * 12 * 1000,
  });
};
export default useAttendances;
