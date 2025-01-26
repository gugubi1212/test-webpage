import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="relative h-18 bg-gray-800 text-gray-200">
        <h1 className="text-white text-6xl p-4">Gugubi</h1>
        <div className="absolute top-0 right-0 text-4xl">
          <div className="py-4 px-24">
          <Link to="/" >Home</Link>
          <span className="px-20"></span>
          <Link to="/create">New Texts</Link>
          </div>
        </div>

      </div>
    </nav>
   );
}
 
export default Navbar;