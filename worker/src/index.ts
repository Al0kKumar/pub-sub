import { createClient } from "redis";

const client = createClient();

const main = async () => {
    await client.connect();
    while(1){
        const response = await client.brPop('submissions',0);

        await new Promise((resolve) => setTimeout(resolve,1000));
        console.log('Processed user submissions');
        
    }
}
    
main();