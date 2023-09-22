import './Nav.css';

function Nav() {
  return (
    <div className="#">
       <nav class='header'>
    <ul>
      <li><a class='home' href='#top'>FAVORITE FONTS</a></li>
      <li><a class='pagelink' href='#serif'>SERIF</a></li>
      <li><a class='pagelink' href='#sans'>SANS-SERIF</a></li>
      <li><a class='pagelink' href='#mono'>MONOSPACED</a></li>
    </ul>
  </nav>
     
    </div>
  );
}

export default Nav;