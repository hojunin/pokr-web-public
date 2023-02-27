'use client';

import React, { Profiler, Suspense } from 'react';
import DashBoardHeader from './header';

import { useQuery } from '@tanstack/react-query';
import { fetchOkr } from '@api/okr';
import { OKR } from '@api/path';
import DashboardAside from './aside';
import DashboardMain from './main';
import { OKR as OKR_TYPE } from '@type/okr';
import ErrorBoundary from '@components/error/ErrorBoundary';
import SuspenseComponent from '@components/common/suspenseComponent';
import AsideLoading from './aside/asideLoading';

interface DashBoardProps {
  okrData?: OKR_TYPE[];
}

const DashBoard = ({ okrData }: DashBoardProps) => {
  // const { data, isError, isLoading } = useQuery([OKR], fetchOkr, {
  //   suspense: true,
  //   staleTime: 3000,
  //   initialData: okrData,
  // });

  // if (isError || isLoading) {
  //   return <></>;
  // }

  return (
    <>
      <DashBoardHeader />

      <DashboardMain />

      <SuspenseComponent
        errorMessage="에러가 발생했다"
        loadingComponent={<AsideLoading />}
      >
        <DashboardAside />
      </SuspenseComponent>
    </>
  );
};

export default DashBoard;
