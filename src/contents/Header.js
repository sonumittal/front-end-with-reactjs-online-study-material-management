import React from 'react'
import {Navbar} from '../components/Navbar';
import {Link} from "react-router-dom";

export const Header = ({logo,title}) => {
    return (
        <div>
      
             {/*----------------------------------header------------------------------------*/}
    <header>
       
          {/*----top_bar class----*/}
        <div className="container-fluid top_bar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-right">
                        <a href="https://www.facebook.com/TezpurUniversity/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-facebook-square" style={{userSelect:'auto'}} ></i></a>
                        <a href="https://twitter.com/TezpurUniv" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://www.linkedin.com/school/tezpur-university/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/c/TezpurUniversity94/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-youtube-square"></i></a>
                        <a href="https://g.page/tezpur-university-tezpur?share" target="_blank" rel="noopener noreferrer"><i
                                className="fa fa-map-marker"></i></a>
                        <Link href="/" style={{marginLeft:'20px'}} >Admin Login</Link>
                    </div>
                </div>
            </div>
        </div>
        {/*----end of top_bar class----*/}

        {/*---logo & nav----*/}
        {/*-----logo------------*/}
        <div className="container header_logo">
            <div className="row" style={{textAlign: 'center'}} >
                <div className="col-sm-1">
                    <Link to="/"><img src={logo} alt="Tezpur-University"
                            className="img-responsive" style={{maxHeight:'122px',maxWidth:'122px'}} /></Link>
                </div>
                <div className="col-sm-9">
                    <h2 style={{color: '#fff',lineHeight:'55px',fontSize:'55px',marginTop:'15px'}} >{title}</h2>
                    <h5 style={{color: '#fff',marginLeft:'20px'}} >Tezpur University</h5>
                </div>
                <div className="col-sm-2">
                    <h6 style={{color:'#BDAF7B',textAlign:'unset',lineHeight:'10px',marginTop:'40px'}} >
                        विज्ञानं यज्ञं तनुते </h6>

                    <p style={{color:'#BDAF7B',textAlign:'unset'}} >Specialized Knowledge promotes creativity</p>
                </div>
            </div>
        </div>
        {/*------end of logo-----*/}
        {/*---------------Nav -------*/}
        <Navbar />
        {/*---end of logo & nav---*/}
        
    </header>
    {/*----------------------------------------end of header--------------------------------*/}

        </div>
    )
}
