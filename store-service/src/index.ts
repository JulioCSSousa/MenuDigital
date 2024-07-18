import { server } from "./Server";

const port = 8001
server.listen(
    port, () => console.log(`Server is running at https://localhost:${port}`));
