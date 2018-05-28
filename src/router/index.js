import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, Switch, Redirect} from 'react-router-dom'
// import App from '../App'
import Home from '../constants/Home'
// import City from '../containers/City'
// import Login from '../containers/Login'
// import User from '../containers/User'
// import Search from '../containers/Search'
// import Detail from '../containers/Detail'
// import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap;