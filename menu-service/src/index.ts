import { server } from "./Server";

const port = 13331;
const host = 'menudigitaldb-menudigitaldb.f.aivencloud.com:'
server.listen(
    port, () => console.log(`Server is running at ${host}:${port}`));
    