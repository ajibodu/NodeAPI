
export interface phoneEnquiryRes{
    status : string,
    success : boolean,
    name : string,
    account : string
}

export interface ZencorePhoneEnq {
    MobileAccounts: MobileAccount[];
    IsTimeout: boolean;
    ResponseCode: string;
    Description: string;
    HasToken: number;
    IsSimSWAP?: any;
    IsVirtualCard: boolean;
}

export interface MobileAccount {
    AccountNumber: string;
    AccountType: string;
    CurBal: number;
    Balance: number;
    AirtimePurchase: string;
    RimNo: number;
    ClassCode: number;
    CurrencyCode: string;
    Name: string;
    Status: string;
    Branch_no: string;
}


