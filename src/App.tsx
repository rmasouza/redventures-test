import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/common/Loading';
import { StoreProvider } from './stores/StoreProvider';
import { configure } from 'mobx';
import Layout from './components/common/layout/Layout';

configure({enforceActions: 'observed'});

const Home = lazy(() => import('./pages/Home'));
const Engines = lazy(() => import('./pages/Engines'));
const Colors = lazy(() => import('./pages/Colors'));

const App: React.FC = () => {
    return (
        <Router>
            <StoreProvider>
                <Suspense fallback={<Loading />}>
                    <Layout>
                        <Switch>
                            <Route path="/" exact strict component={Home} />
                            <Route path="/engines" exact strict component={Engines} />
                            <Route path="/colors" exact strict component={Colors} />
                            <Route render={() => {
                                return <div>{window.location.pathname}</div>
                            }} />
                        </Switch>
                    </Layout>
                </Suspense>
            </StoreProvider>
        </Router>
    )
};

export default App;
