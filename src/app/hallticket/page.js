import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar';
import Footer from '../../../componets/Footer/Footer';
import Form from '../../../componets/Form/Form';

const page = () => {
    return (
        <div>
            <Navbar />
                {/* <div style={{border: "2px solid black", height:"300px"}}> */}
                    <Form />
                {/* </div> */}
            <Footer />
        </div>
      );
}

export default page