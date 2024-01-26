const blockchainCall = async()=>{
    const dataBlockchain = await blockDataGet() //this will wait untill all data not get (await)
    console.log(dataBlockchain)
}