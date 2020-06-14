import React, { Children } from "react";
import "./style.css";


export function TopNav({params,children}) {
  console.log(params)
  return(
    <p></p>
  )
}
/* export function TopNav({userId}) {


  return <p>hi</p>
} */
/* class TopNav extends Component {
  state = {
    userId: null
  }
  TopNav = userId => {
    console.log(userId)
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.checkSession();
  }
  checkSession = () => {
    API.getSession()
      .then((res) => {
        if (res.data.isUserLoggin) {
          this.setState({
            userId: res.data.userId
          })
        }
        else {
          this.setState({ userId: null })
        }
      })
      .catch(err => console.log(err))
  }

  logOut = (evt) => {
    //evt.preventDefault()
    API.logOut()
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/', { some: 'state' })
        }
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light bg-navBar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" id="category-nav">
            <li className="nav-item">
              <a className="nav-link" href="/roles">Departments/Roles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Users</a>
            </li>

            <li className="nav-item">
              {this.state.userId === null ? '' : <a className="nav-link" href="" onClick={this.logOut}>Log Out</a>}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default TopNav; */