import React from 'react'

export default function Navbar() {
    return (
        <div>



<nav class="nav">
        {/* <div class="container">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <img src="../images/sprmeLogo.png"  width="70" height="70"/>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/spirits">Products</a>
              </li> 
              
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/leave">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cartPage">Cart</a>
              </li>
             
              
              
                     
            </ul>
          </div>
        </div> */}

<ul type="none">
                <li>
                    <a href="#" class="logo">
                        <img src="../images/logo.png" />
                    </a>
                </li>
                <li>
                    <a href="/employee/list">
                        <i class="fas fa-users"></i>
                        <span class="nav-item">Employee list</span>
                        
                    </a>
                </li>
				<li>
                    <a href="/employee/add">
                        <i class="fas fa-users"></i>
                        <span class="nav-item">Add Employee</span>
                        
                    </a>
                </li>
            </ul>
      </nav>


        </div>
    )
}

