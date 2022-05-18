import CookieHandling from "../Misc/CookieHandling";

class Tokens{
    static accessToken;
    static refreshToken;
    static username;

    static async renewTokens(token, login, save){
        let res = await fetch("https://localhost:7031/api/RefreshToken?login=" + login,{
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
            if (save){
                CookieHandling.setCookie("rToken", Tokens.refreshToken, 30);
            }
            if (login){
                return tokens.username;
            }
            return true;
        }
        return false;
    }

    static autoRenewTokens(save){
        setInterval(async () => await Tokens.renewTokens(Tokens.refreshToken, false, save), 285000);
    }
}

export default Tokens;