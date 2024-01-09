import React from 'react';
import './Home.css'; 
import '../componenets/BasicLayout.css'
// import { useNavigate } from 'react-router-dom';
import * as basicLayout from '../componenets/BasicLayout';

export default function Home () {
    //const navigate = useNavigate()
    
    return (
        <div className='site-container' style={{position: 'relative'}} >
            <basicLayout.SiteBar barDescription= "Portfolio-Site"/>
            <basicLayout.LargeBanner/>
            <basicLayout.ResumeBlock/>
            <basicLayout.ProjectDirectory/>

            <basicLayout.TarotArtsDisplay/>
            <basicLayout.LuminousWatersDisplay/>
            <basicLayout.IQPDisplay/>
            <basicLayout.SoftEngDisplay/>
            <basicLayout.ASLTechDisplay/>

            <basicLayout.Footer/>
        </div>
    );


    /*
             
            
                      <basicLayout.SiteBar barDescription= "Portfolio-Site"/>
            <basicLayout.LargeBanner/>
            <basicLayout.ResumeBlock/>
            <basicLayout.ProjectDirectory/>            
            <div style={{marginTop: '100px'}}>  </div>
            <basicLayout.ProjectDisplay/>
            <div style={{marginTop: '100px'}}>  </div>
            <basicLayout.Footer/>

                       
        <div className='zontainer'style={{position: 'relative'}} >
            <div className='square' style={{backgroundColor: 'green', position: 'absolute', top: 0, left: 0, zIndex: '3'}}> </div>
            <div className='square2' style={{backgroundColor: 'red', position: 'absolute', top: 0, left: 30, zIndex: '4'}}> </div>
            <div className='square2' style={{backgroundColor: 'blue', position: 'absolute', top: 0, left: 60, zIndex: '6'}}> </div>
        </div>
    */
}