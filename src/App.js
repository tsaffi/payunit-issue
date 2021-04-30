import React , {Component, Suspense}  from 'react'
import Main from './Main';
import { Link } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        <Suspense
          fallback={null}
        >
          <div style={{marginLeft: "100px", marginTop: "50px"}}>
            <div style={{marginBottom: "100px"}}>
              <Link to="/" style={{marginRight: '20px'}}>Home</Link>
              <Link to="/finance">Finance</Link>
            </div>
            <Main />
          </div>
        </Suspense>
      </div>
    )
  }
}
