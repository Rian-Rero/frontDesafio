import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Styles';
import SystemLoading from '../../Components/features/SystemLoading/SystemLoading';

export default function AppLayout() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const timeToShowLoading = 2000; // milliseconds

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(
      () => setIsLoadingScreen(false),
      timeToShowLoading,
    );

    return () => clearTimeout(loadingTimer);
  }, []);

  return isLoadingScreen ? (
    <SystemLoading />
  ) : (
    <Container>
      <Outlet />
    </Container>
  );
}
