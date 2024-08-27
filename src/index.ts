import { server, startServer } from "./Server";

const menuport = 8000;
const host = '0.0.0.0';
server.listen(
    menuport, host, () => {
        console.log(`app server is running at ${menuport} ${host}`)
    }
);