import React, { useState } from 'react';
import { ReactComponent as Search } from '../assets/images/header/header_search.svg';
import { ReactComponent as Dollar } from '../assets/images/header/header_dollar.svg';
import { ReactComponent as Language } from '../assets/images/header/header_language.svg';
import { ReactComponent as Logo } from '../assets/images/header/header_logo.svg';
import { ReactComponent as Plus } from '../assets/images/header/header_plus.svg';
import { ReactComponent as User } from '../assets/images/header/header_user.svg';
import { ReactComponent as DownArrow } from '../assets/images/header/header_arrow.svg';
import './Header.css'
const Header = () => {

  const [ animation , setAnimation ] = useState(false)
    const SearchAnimationFunc = () => {
      setAnimation(!animation)
      console.log("object");
    }

    return (
      <div className='header_border'>
        
          <div className='container'>
        <header className='header'>
            <Logo className='header_logo_icon' />

            <div className='header_search'>
            <div className={`header_search_pa ${animation ? 'header_search_pa_animation' : null }`}>
              
                <div className='header_search_wrapper'>
                    <Search className='header_search_wrapper_search-icon'/>
                    <input type="text" className='header_search_wrapper_inp' placeholder='Поиск домов'
                      onClick={() => SearchAnimationFunc()}
                    />
                </div>
                <div className={`header_search_animation ${ animation ? 'header_search_animation_animate' : null}`}></div>
            </div>
            </div>

            <div className='header_login'>
            <ul className='header_login_list'>
              <li className='header_login_list_item'>Как разместить объект?</li>
              <li className='header_login_list_item'>О проекте</li>
              <li className='header_login_list_item'><Language /> Язык</li>
              <li className='header_login_list_item'><Dollar /> USD <DownArrow /></li>
            </ul>
            <div className='header_object'>
                <button className='header_object_add'> <Plus />  Добавить объект</button>
                <button className='header_object_login'><User />  Войти</button>
            </div>
            </div>
        </header>
          </div>
      </div>
    );
};

export default Header;