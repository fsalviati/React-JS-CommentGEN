import '../Sidebar/sidebar-style.css'
import background from '../../assets/sidebar_background.jpg'
import { FaPencilAlt } from 'react-icons/fa';


export function Sidebar(){
    return(
          <div className='sidebar-content'>
              <div className='sidebar_image_container_1'>
                  <img src={background} alt="" />
              </div>
              <div className='sidebar_image_container_2'>
                  <img src="https://github.com/fsalviati.png" />
                  <p>Fernando Salviati</p>
                  <p>Web Developer</p>
              </div>
              <div className='sidebar_image_container_3'>
                  <button><FaPencilAlt /> Edit your Profile</button>
              </div>
          </div>
    );
}