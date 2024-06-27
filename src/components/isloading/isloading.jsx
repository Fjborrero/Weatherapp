//import { useState } from "react";
import { Circles} from 'react-loader-spinner'
import PropTypes from 'prop-types';
import './isloading.css'

Load.propTypes = {
    isVisible: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default function Load({isVisible, isLoading}){

    //const [isLoading, setIsLoading] = useState(true);
    if(isLoading==true && isVisible== true){
        <section className='loader'>
        <Circles
        height="80"
        width="80"
        color="#9b9b9b"
        ariaLabel="Loading ..."
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </section>

    }


    if (isVisible == true && isLoading==false) {
    return(
        <section className='loader'>
            <div className='data'>No data</div>
            <Circles
            height="80"
            width="80"
            color="#9b9b9b"
            ariaLabel="Loading..."
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </section>
        
    )
    }
}
