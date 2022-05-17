class Tokens{
    static accessToken;
    static refreshToken;
    static username;

    static async renewTokens(token){
        let res = await fetch("https://localhost:7031/api/RefreshToken",{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Token: token,
            })
        });
        if (res.ok){
            let tokens = await res.json();
            Tokens.accessToken = tokens.accessToken;
            Tokens.refreshToken = tokens.refreshToken;
            return true;
        }
        return false;
    }

    static autoRenewTokens(){
        setInterval(async () => await Tokens.renewTokens(Tokens.refreshToken), 285000);
    }
}

export default Tokens;