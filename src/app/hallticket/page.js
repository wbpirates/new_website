import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar';
import Footer from '../../../componets/Footer/Footer';
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('../../../componets/Form/Form'), { ssr: false });

const page = () => {
    return (
        <div>
            <Navbar />
                <Form />
            <Footer />
        </div>
      );
}

export default page