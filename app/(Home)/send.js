export default async function send(sentItem){

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "91ef0827-3e26-4ea9-a7f0-b2dec3278987",
            send: sentItem
        }),
    }
    );
}