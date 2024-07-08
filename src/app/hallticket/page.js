import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar';
import Footer from '../../../componets/Footer/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
                <div style={{border: "2px solid black", height:"300px"}}>
                    Hall Ticket
                </div>
            <Footer />
        </div>
      );
}

export default page