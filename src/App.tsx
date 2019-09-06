import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/common/Loading';
import { StoreProvider } from './stores/StoreProvider';

const Home = lazy(() => import('./pages/Home'));
const Engines = lazy(() => import('./pages/Engines'));

const App: React.FC = () => {
    return (
        <Router>
            <StoreProvider>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact strict component={Home} />
                        <Route path="/engines" exact strict component={Engines} />
                        <Route render={() => {
                            return <div>{window.location.pathname}</div>
                        }} />
                    </Switch>
                </Suspense>
            </StoreProvider>
        </Router>
    )
};

export default App;
