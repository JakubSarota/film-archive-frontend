import '../components/Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Test() {
  return (
    <div className="home">
      <h1>
        <Link to="/">GO BACK</Link>
      </h1>
    </div>
  );
}
