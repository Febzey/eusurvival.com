import { FaDiscord, FaHome, FaQuestion, FaUserSlash, FaBars, FaCheck, FaUserShield } from 'react-icons/fa';
import { Component } from 'react';
import MobileMenu from './NavMobile';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
class NavBar extends Component { 
    state = {
        sideMenu: false
    };

    openSideMenu = () => { 
        this.setState(statepre => ({ 
            sideMenu: !statepre.sideMenu
        }));
    };

    render() {
        return (
          <>
            <div className="z-10 fixed top-0 bg-black bg-opacity-40 w-full h-20 flex sm:justify-between justify-center flex-row items-center px-24">
    
              <div className="text-yellow-500 text-3xl font-bold font-permMarker">EUSURVIVAL.COM</div>
    
              <ul className="hidden lg:flex flex-row text-white font-bebas text-lg">
                <li><Link to="/" className="px-5 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer "><FaHome />Home</Link></li>
                <li><Link to="/faq" className="px-5 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer "><FaQuestion />Faq</Link></li>
                <li><a href="https://bans.eusurvival.com/" className="px-5 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer "><FaUserSlash />Ban-List</a></li>
                <li><Link to="/vote" className="px-5 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer "><FaCheck />Vote</Link></li>
                <li><Link to="/rules" className="px-5 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer "><FaUserShield />Rules</Link></li>
              </ul>

              <div className="hidden lg:flex text-white w-60 font-bebas">
              <a href="https://discord.com/invite/VyGufepXDf" className="px-5 bg-discordblue text-3xl rounded-sm p-2 duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-125 hover: cursor-pointer ml-7"><FaDiscord/></a>
              </div>
    
              <button className="block lg:hidden menu-button" onClick={this.openSideMenu}>
                <FaBars className="text-3xl text-yellow-500 ml-12"/>
              </button>
    
              <CSSTransition
                in={this.state.sideMenu}
                timeout={400}
                classNames="list-transition"
                unmountOnExit
                appear
              >
    
              {MobileMenu()}
    
              
    
              </CSSTransition>
    
            </div>
          </>
        );
      }
    }
    
    
    export default NavBar;