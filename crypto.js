const Status = async () => {
    try{
        let ping = await fetch("https://api.coingecko.com/api/v3/ping")
        let rtpa = await ping.json();
        console.table(rtpa);
        console.log("apis is working")
        return ;
    } catch(err){
        console.log(err)
        console.log("apis isn´t working")
    }
}

const eth = async () => {
    try{
        let apiEth = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false")
        let apiDataEth = await apiEth.json();

        const valueEth = apiDataEth["ethereum"]["usd"]
        const capEth =  apiDataEth["ethereum"]["usd_market_cap"];
    

        const valuehtmlEth = document.getElementById("valEth")
        valuehtmlEth.innerHTML = `$. ${valueEth}`

        const caphtmlEth = document.getElementById("capEth");
        caphtmlEth.innerHTML = `Capitalización $. ${capEth} `	
        
        return ;
    } catch(err){
        console.log(err)
    }
}
 eth();

const btc = async () => {
    try{
        let apiBtc = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false");
        let apiDataBtc = await apiBtc.json();
        
        const valueBtc = apiDataBtc["bitcoin"]["usd"]
        const capBtc = apiDataBtc["bitcoin"]["usd_market_cap"]

        const valuehtmlBtc = document.getElementById("valBtc")
        valuehtmlBtc.innerHTML = `$. ${valueBtc}`

        const caphtmlBtc = document.getElementById("capBtc");
        caphtmlBtc.innerHTML = `Capitalización $. ${capBtc} `	

    }catch(err){
        console.log(err)
    }
}

btc();

const bnb = async () => {
    try{
        let apiBnb = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false");
        let apiDataBnb = await apiBnb.json();
        
        const valueBnb = apiDataBnb["binancecoin"]["usd"]
        const capBnb = apiDataBnb["binancecoin"]["usd_market_cap"]

        const valuehtmlBnb = document.getElementById("valBnb")
        valuehtmlBnb.innerHTML = `$. ${valueBnb}`

        const caphtmlBnb = document.getElementById("capBnb");
        caphtmlBnb.innerHTML = `Capitalización $. ${capBnb} `	

    }catch(err){
        console.log(err)
    }
}

bnb();

const pvu = async () => {
    try{
        let apiPvu = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false");
        let apiDataPvu = await apiPvu.json();
        
        const valuePvu = apiDataPvu["plant-vs-undead-token"]["usd"]
        const capPvu = apiDataPvu["plant-vs-undead-token"]["usd_market_cap"]

        const valuehtmlPvu = document.getElementById("valPvu")
        valuehtmlPvu.innerHTML = `$. ${valuePvu}`

        const caphtmlPvu = document.getElementById("capPvu");
        caphtmlPvu.innerHTML = `Capitalización $. ${capPvu} `	

    }catch(err){
        console.log(err)
    }
}
 
pvu();