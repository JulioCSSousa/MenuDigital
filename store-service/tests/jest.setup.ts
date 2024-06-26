import supertest  from 'supertest'
import {server} from "../src/Server"
import { afterAll, beforeAll} from '@jest/globals';

import { AppDataSource } from '../src/database/data-source'


export const testServer = supertest(server)

beforeAll(async () => {
    await AppDataSource.initialize();
  });


