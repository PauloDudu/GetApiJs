const ola = async () => {

    const url = "http://vps.depositcode.net:888/registro/todos";

    try {
        
        let resp = await fetch(url, { method: 'Get'});
            resp.json().then(r1 => {
                console.log(r1);
                let localStorag = localStorage.getItem("@HACK:Associadas");

                if(!!localStorag) {
                    localStorage.removeItem("@HACK:Associadas");
                }

                localStorage.setItem("@HACK:Associadas",JSON.stringify(r1));                
            })
    } catch (error) {
        console.log(error);
    }
}