import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar';
import Footer from '../../../componets/Footer/Footer';
import dynamic from 'next/dynamic';
const Login = dynamic(() => import('../../../componets/Login/Login'), { ssr: false });
import { API_HOST } from "../../../configs/api.config.js";

const page = () => {
    return (
        <div>
            <Navbar host={API_HOST} />
                <Login host={API_HOST} />
            <Footer host={API_HOST} />
        </div>
      );
}

export default page;    