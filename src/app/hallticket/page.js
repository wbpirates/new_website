import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar';
import Footer from '../../../componets/Footer/Footer';
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('../../../componets/Form/Form'), { ssr: false });
import { API_HOST } from "../../../configs/api.config.js";

const page = () => {
    return (
        <div>
            <Navbar host={API_HOST} />
                <Form host={API_HOST} />
            <Footer host={API_HOST} />
        </div>
      );
}

export default page