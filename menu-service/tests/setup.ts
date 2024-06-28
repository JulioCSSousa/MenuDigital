import supertest  from 'supertest'
import {server} from "../src/Server"


export const testServer = supertest(server)
