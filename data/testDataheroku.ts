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