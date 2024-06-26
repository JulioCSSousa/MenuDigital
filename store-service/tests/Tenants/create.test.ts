import { describe, expect, it } from '@jest/globals';
import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

import { afterAll, beforeAll} from '@jest/globals';
import { AppDataSource } from '../../src/database';

describe('Tenants - create', function(){

      afterAll(async () => {
        await AppDataSource.destroy();
      });
      

    it('create register', async function(){

        const res = await testServer.post('/api/tenants').send({

            "registerId": "45632158989879",
            "fullName": "Chris",
            "phoneNumber": "123-456-7890",
            "subscription": 1,
            "payment": 100,
            "planValue": 50,
            "stores": [
              {
                              "storePhone": "19987565478",
                              "storeName": "chrislanches",
                              "workTime": "08-18",
                              "categoryId": null,
                              "description": "seeeeee",
                              "imageUrl": "",
                              "color": "flknf",
                              "logo": ""
              }
            ]

        })

        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        
    } )
})
