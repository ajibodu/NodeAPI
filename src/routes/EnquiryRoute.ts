import { Router, Request, Response } from 'express';
import {apireq, phoneEnquiryReq} from '../models/Request';
import {phoneEnquiryRes, ZencorePhoneEnq} from '../models/Response';
import axios from 'axios';
import {getAccountsFromMobile} from '../services/ZencoreRest';

const router = Router();


router.get('/',  (req : Request, res : Response) : Response => {
    let val = req.body;
    return res.send("got here")
})

router.post('/phoneNumberValidation', async (req : Request, res : Response) : Promise<void> => {
    let val: phoneEnquiryReq = req.body;
    try{
        let customerDetail = await getAccountsFromMobile(val.phone)
        res.json(customerDetail.data)
    }catch(err){
        console.log(err)
    }    
})

export default router;