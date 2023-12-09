
import '../Header/header-style.css'
import logo from '../../assets/test.png'

export function Header(){
    return(
        <div className='headerMain'>
              <img src={logo}/>
              <div>CommentGEN</div>
        </div>
    );
}