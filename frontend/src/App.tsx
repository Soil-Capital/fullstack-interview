import { useAppInit } from '@hooks/useAppInit';
import { Router } from '@router';
import LoadingPage from './pages/LoadingPage/LoadingPage';

const App = () => {
    const { initialized } = useAppInit();

    return initialized ? <Router /> : <LoadingPage />;
};

export default App;
