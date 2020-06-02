import React from 'react'
import BottomBanner from '../../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const FuelHardship =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Fuel Hardship</title>
            </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div className="overlay"></div>
        
                <div className={isMobile? "Posts-mobile":"contactHeading"}>
                    <h1>Fuel Hardship</h1>
                    <Wave></Wave>
                </div>

                <div className="whiteBackground">

                </div>

                

            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default FuelHardship
