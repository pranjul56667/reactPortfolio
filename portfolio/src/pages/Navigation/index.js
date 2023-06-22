import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navigation() {
  return (
    <>
        <div className='sticky' >
            <div className='navbar' >
                <div>
                    <Link to='/' className='logo' >
                        <h2>
                            <span>&lt;</span> Kumar Pranjul <span>&#47;</span><span>&gt;</span>
                        </h2>
                    </Link>
                </div>
                <div className='pages' >
                    <Link to='/home' className='page-name' >
                        <p>HOME</p>
                    </Link>
                    <Link to='/skill' className='page-name' >
                        <p>SKILL</p>
                    </Link>
                    <Link to='/project' className='page-name' >
                        <p>PROJECT</p>
                    </Link>
                    <Link to='/contact' className='page-name' >
                        <p>CONTACT</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation