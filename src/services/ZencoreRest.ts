import {phoneEnquiryRes, ZencorePhoneEnq} from '../models/Response';
import axios from 'axios';

export const zencoreRequestConfig = {
    baseURL: "https://webservicestest.zenithbank.com:8443/ZenithCoreRest",
    headers:{
    "X-CallerID":"ZMOBILE0001",
    "X-CallerName":"ZMOBILE",
    "X-CallerPassword": "ZMOBILE@24912"
    }
}

export const getAccountsFromMobile = async (phoneNo : string) =>{
    let response = await axios.get<ZencorePhoneEnq>(
        `/api/Account/AccountFromMobile?MobileNumber=${phoneNo}&isUssd=Y`,  
        zencoreRequestConfig
    );
    return response;
}