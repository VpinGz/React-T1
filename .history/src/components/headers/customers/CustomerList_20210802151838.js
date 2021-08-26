import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/actions/customerActions";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


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
  };
  

export default CustomerList;
