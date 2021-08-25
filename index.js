const pup = require('puppeteer');

(async () => {

    const browser = await pup.launch();
    const page = await browser.newPage();
    let minimo = 400000;
    await page.goto("https://www.solotodo.cl/products/82384-logitech-g915-lightspeed-wireless-rgb-mechanical-gaming-keyboard-920-009495");
    await page.waitForTimeout(12000);

    const wea = await page.evaluate(() => {
        const k = document.querySelectorAll('td[class="text-right"] a');
        const valores=[];
        for (let element of k){
            const i = (parseInt(element.innerText.substring(1))+1)*1000;
            valores.push(i);
        }
        return valores;
    })

    console.log(wea);

    while (minimo>300000){
        await page.goto("https://simple.ripley.cl/xiaomi-mi-10t-128gb-8gb-ram-5g-carcasa-mpm00018746360?color_80=negro&s=o");

            let caca = await page.evaluate(() => {
            const p = document.querySelector('div [class="product-price-container product-internet-price"] > dt').innerText;
            const valor = (parseInt(p.substring(1))+1)*1000;
            return valor;

        }); 
    
        console.log(caca);
        if(caca<minimo){
            minimo = caca;
        }
    
        await page.goto("https://www.mercadolibre.cl/xiaomi-10t-5g-dual-sim-128-gb-plata-lunar-8-gb-ram/p/MLC16244158");

       let tula = await page.evaluate(() => {
            const p = document.querySelector('span[class="price-tag ui-pdp-price__part"]').innerText;
            const valor = (parseInt(p.substring(2))+1)*1000;
            return valor;

        });
        console.log(tula);
        if(tula<minimo){
            minimo = tula;
        }

        await page.goto("https://www.linio.cl/p/xiaomi-mi-10t-8gb-ram-128gb-rom-lhb6f9?utm_source=affiliates&utm_medium=hasoffers&utm_campaign=2900&aff_sub=");
    
       let pene = await page.evaluate(() => {
            const p = document.querySelector('span[class="price-main-md"]').innerText;
            const valor = (parseInt(p.substring(1))+1)*1000;
            return valor;

        });
        console.log(pene);
        
        if(pene<minimo){
        minimo = pene;
        }
        await page.waitForTimeout(1200000);
    }




    await browser.close();

    
    
   


})();
