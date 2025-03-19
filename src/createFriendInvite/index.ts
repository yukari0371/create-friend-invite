export async function createFriendInvite(
    token: string,
) {
    return (await fetch(
        "https://discord.com/api/v9/users/@me/invites",
        {
            method: "POST",
            headers: {
                "authorization": token,
                "content-type": "application/json",
            },
            body: JSON.stringify({})
        }
    )).json();
};