import { server } from "./Server";

const port = 3000
server.listen(
    port, () => console.log(`Server is running at https://localhost:${port}`));
    