import React from 'react'
import './Style/HeaderStyle.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="navbar--container">
          <div className="title">
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><h1>Tokopedia Play</h1></Link>
            
          </div>
          <div className="menu">
            <div className="sorter">
              <a href="#">
                Live
              </a><a href="#">
                Explore
              </a><a href="#">
                Promo
              </a><a href="#">
                Newest
              </a>
            </div>
            <div className="sorter">
              <a href="#">
                About
              </a><a href="#">
                Login
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
