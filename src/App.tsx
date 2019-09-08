import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/common/Loading';
import { StoreProvider } from './stores/StoreProvider';
import { configure } from 'mobx';
import Layout from './components/common/layout/Layout';

configure({ enforceActions: 'observed' });

const Home = lazy(() => import('./pages/Home'));
const Engines = lazy(() => import('./pages/Engines'));
const Colors = lazy(() => import('./pages/Colors'));
const Wheels = lazy(() => import('./pages/Wheels'));
const Resume = lazy(() => import('./pages/Resume'));

const App: React.FC = () => {
    return (
        <Router>
            <StoreProvider>
                <Layout>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/" exact strict component={Home} />
                            <Route path="/engines" exact strict component={Engines} />
                            <Route path="/colors" exact strict component={Colors} />
                            <Route path="/wheels" exact strict component={Wheels} />
                            <Route path="/resume" exact strict component={Resume} />
                            <Route render={() => {
                                return <div>{window.location.pathname}</div>
                            }} />
                        </Switch>
                    </Suspense>
                </Layout>
            </StoreProvider>
        </Router>
    )
};

export default App;
