export class TestData {
    static Makeapptmt() {
        return [{ testid: 'TC001', dd: 'Hongkong CURA Healthcare Center', facility: 'Medicare', date: '7/10/2026', comment:'comment from TC001' },
        { testid: 'TC002', dd: 'Seoul CURA Healthcare Center', facility: 'Medicare', date: '8/10/2026', comment:'comment from TC002' },
        { testid: 'TC003', dd: 'Tokyo CURA Healthcare Center', facility: 'None', date: '11/10/2026', comment:'comment from TC003' }]
    }

}

export class SauceData{
    static Data(){
        return [{TestId: 'TC001', Username: 'standard_user', Password: 'secret_sauce', name:'Saurabh', lname:'Pandey', pcode:'123456'}
        ]
    }
}
//jitni keys is array mei add krunga utni time framework multiple data sets ke sath chalega

// ab jo bhi playwright interview hoga usme show kr skte isko
// framework level pe ki maine bnaya hai
// haa kyunki enterprise mei itni jaldi toh dete nhi framework k liye issey 
// ye idea mil jayega ki framework ka structure samjhta hai banda

// yes, and apni bhi overall understanding mast ho jayegi 
// fixtures use krne se ek fayda aur hai apko baseclass ki jarurat nhi hai
// ye aur dekhte jao
