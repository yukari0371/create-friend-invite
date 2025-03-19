import { createFriendInvite } from "./createFriendInvite/index";
import { prompt } from "./utils/prompt";
import { logger } from "./utils/logger";
import { sleep } from "./utils/sleep";

async function main() {
    while (true) {
        console.clear();
        const token = await prompt("token");
        if (token === "") {
            logger.error("token is invalid.");
            await sleep(1500);
            continue;
        }
        const res = (await createFriendInvite(token));
        if (res.message) {
            logger.error(res.message);
            return (await sleep(3000));
        }
        logger.success(`https://discord.gg/${res.code}`);
        await prompt("Enter");
        break;
    }
}

main();