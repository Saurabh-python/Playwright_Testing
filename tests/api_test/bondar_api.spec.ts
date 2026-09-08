import { test, expect } from '@playwright/test'


test('POST & Delete CALL', async ({ request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login',
        { data: { "user": { "email": "hello1995@hello.com", "password": "hellohello" } } }
    )
    const response_json = await response.json();
    console.log('For fetching the auth token')
    console.log(response_json);
    console.log(response.status());
    const token = response_json.user.token;
    expect(typeof token).toBe('string'); //Validates the datatype of token


    const article_url = 'https://conduit-api.bondaracademy.com/api/articles/';
    const article_response = await request.post(article_url,
        {
            headers: { Authorization: `Token ${token}` }
            , data: {
                "article": {
                    "title": "KINGSIZE",
                    "description": "KINGSIZE",
                    "body": "KINGSIZE",
                    "tagList": [
                        "GAJ"
                    ]
                }
            }
        })
    const response1 = await article_response.json();
    console.log('Request created by POST METHOD');
    console.log(response1);
    expect(article_response.status()).toEqual(201);
    
    //Deleting the request above created
    const delete_identifier = response1.article.slug
    const delete_req= await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${delete_identifier}`,
        {headers: { Authorization: `Token ${token}`}}
    )
    console.log('Deletion done by DELETE METHOD')
    console.log(delete_req.status())
    expect(delete_req.status()).toEqual(204)
});
