import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('../../../components/Form/Form'), { ssr: false });
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