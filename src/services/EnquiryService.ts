import { phoneEnquiryRes } from "../models/Response";
import {getAccountsFromMobile} from './ZencoreRest';

class EnquiryService{

    public async phoneNumberValidation(phoneNo : string) : Promise<phoneEnquiryRes>{
        try {
            let accountResp = await getAccountsFromMobile(phoneNo);
            
        } catch (error) {
            
        }
    }
}