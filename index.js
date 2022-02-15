const puppeteer = require('puppeteer');
const readlineSync  = require('readline-sync');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const link = "https://www.google.com/search?q=real+to+dollar&oq=real+to+dl&aqs=chrome.1.69i57j0i10i433j0i10l5j0i10i22i30j0i22i30l2.4038j1j7&sourceid=chrome&ie=UTF-8"
    await page.goto(link);
    const real = readlineSync.question('Qual o valor em real pra converter em dolar? ');
    await page.$eval('#knowledge-currency__updatable-data-column > div.H07hi > table > tbody > tr:nth-child(1) > td:nth-child(1) > input', e => e.value = '');
    await page.type('#knowledge-currency__updatable-data-column > div.H07hi > table > tbody > tr:nth-child(1) > td:nth-child(1) > input',real);
    await page.waitForTimeout(2000);
    const dolar = await page.$eval('#knowledge-currency__updatable-data-column > div.H07hi > table > tbody > tr:nth-child(3) > td:nth-child(1) > input', e => e.value);
    console.log('Valor de R$'+ real + ' convertido em dolar é $' + dolar);
  
    await browser.close();
    
  })();
