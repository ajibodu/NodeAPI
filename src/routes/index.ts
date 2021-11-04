import {Router} from 'express';
import EnquiryRouter from './EnquiryRoute';

const route = Router();

route.use('/Enquiry', EnquiryRouter);


export default route;
