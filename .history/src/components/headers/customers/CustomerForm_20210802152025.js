import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { getCustomerById } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UserForm = props => {
    const [user, setUser] = useState(props.user)
  
    const submit = e => {
      e.preventDefault()
      fetch('/api', {
        method: 'POST',
        body: JSON.stringify({ user }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(json => setUser(json.user))
    }
  
    return (
      <form onSubmit={submit}>
        <input
          type="text"
          name="user[name]"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
        {user.errors.name && <p>{user.errors.name}</p>}
  
        <input
          type="email"
          name="user[email]"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        {user.errors.name && <p>{user.errors.name}</p>}
  
        <input type="submit" name="Sign Up" />
      </form>
    )
  }
export default UserForm;
