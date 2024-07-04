import { server } from "./Server";

const port = 3001
server.listen(
    port, () => console.log(`Server is running at https://localhost:${port}`));
