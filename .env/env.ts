import dotenv from 'dotenv';

dotenv.config({path : '.env/.env.qa'})

export const environment ={
    baseUrl : process.env.BASE_URL!
}
console.log(environment.baseUrl)