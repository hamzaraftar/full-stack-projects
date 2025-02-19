import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwtDecode';
import api from '../api';
import {useEffect, useState} from 'react';

import {ACCESS_TOKEN ,REFRESH_TOKEN} from '../constants';

function ProtectedRoute({children}) {
    const [isAutherized, setIsAutherized] = useState(null);
    const refreshToken = async ()=>{
        
    }
    const auth = async ()=>{

    }
}

