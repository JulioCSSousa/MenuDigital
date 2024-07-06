import { server, testDatabaseConnection } from "./Server";

const port = 8000;
const host = '0.0.0.0'
server.listen(
    port, host, () => {
        console.log(`Server is running at ${port} ${host}`)
        testDatabaseConnection()
    }
);

