import { describe, expect, it, afterAll } from '@jest/globals';
import { testServer } from '../../../store-service/tests/jest.setup';
import { AppDataSource } from '../../../store-service/src/database';
import { StatusCodes } from 'http-status-codes';

describe('product - create', () => {

    afterAll(async () => {
        AppDataSource.destroy()
    })
    it('create', async () => {

        const res = await testServer.post('/api/product').send({
            "name": "Pizza de Strogonoff",
            "description": "T",
            "isSale": true,
            "image": null,
            "extraIndex": 1,
            "observation": "Example observation",
            "amount": 100,
            "previewsAmount": 90,
            "combineAmount": true,
            "category": {
              "id": 1,
              "name": "Example Category",
              "label": "Example Label"
            },
            "combined": [
              {
                "id": "combined-uuid",
                "type": "Example Type",
                "mainMenu": true,
                "size": "Large",
                "min": 1,
                "max": 5
              }
            ]
          }
          )

          expect(res.statusCode).toEqual(StatusCodes.CREATED)
    })
})