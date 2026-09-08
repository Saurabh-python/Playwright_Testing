import {test, expect, mergeTests} from '@playwright/test'
import { request } from 'node:http'

test('POST API Method', async({request}) =>{
    const creation_data = {
    "firstname" : "Saurabh",
    "lastname" : "Pandey",
    "totalprice" : 98,
    "depositpaid" : false,
    "bookingdates" : {
        "checkin" : "2026-08-13",
        "checkout" : "2019-09-26"
    },
    "additionalneeds" : "Money"
}
const response = await  request.post('https://restful-booker.herokuapp.com/booking',
        {data: creation_data});
    await console.log('Status Code is : ',response.status());
    expect(response.status()).toBe(200);
    const res_body = await response.json();
    console.log(res_body);  
})

test.skip('GET API Method', async({request})=>{
    const response = await request.get('https://restful-booker.herokuapp.com/booking/3882');
    await console.log(response.status());
    const res_body = await response.json();
    console.log('GET RESPONSE:',res_body);
})

test.skip('Get API method using Query params', async({request})=>{
    const firstname = 'Jim';
    const lastname = 'Brown';
    const response = await request.get('https://restful-booker.herokuapp.com/booking/',
        {params: {firstname, lastname}})
    console.log(response.status())
    const res_body = await response.json();
    await expect(response.status()).toBe(200)
    console.log(res_body)
    for (const item of res_body){
        await expect(item).toHaveProperty('bookingid');
        await expect(item.bookingid).toBeGreaterThan(0);
        await expect(typeof item.bookingid).toBe('number');
    }
   
})

test('Delete Request ', async({request})=>{
    const url = 'https://restful-booker.herokuapp.com/booking/303';
    const response = await request.delete(url);
    expect(response.status()).toBe(403);
})