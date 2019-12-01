'use strict';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // ホーム画面
  await page.goto('https://yoyaku.sports.metro.tokyo.jp/user/view/user/homeIndex.html', { waitUntil: 'domcontentloaded' });
  const loginPageTransitionButton = '#login';
  await page.waitForSelector(loginPageTransitionButton);
  await page.click(loginPageTransitionButton);

  // ログイン画面
  const userIdInputSelector = '#userid';
  await page.waitForSelector(userIdInputSelector);
  await page.type(userIdInputSelector, 'Enter ID');
  const passwordInputSelector = '#passwd';
  await page.waitForSelector(passwordInputSelector);
  await page.type(passwordInputSelector, 'Enter password');
  await page.waitFor(3000)
  await page.waitForSelector(loginPageTransitionButton);
  await page.click(loginPageTransitionButton);

  // マイページ
  const dateSearchButtonSelector = '#dateSearch';
  await page.waitForSelector(dateSearchButtonSelector);
  await page.click(dateSearchButtonSelector);

  // 日付、種目選択画面
  console.log(2);
  const monthSelector = '#month';
  const dateSelector = '#day';
  const sHourSelector = '#sHour';
  const eHourSelector = '#eHour';
  await page.waitForSelector(monthSelector);
  await page.waitForSelector(dateSelector);
  await page.waitForSelector(sHourSelector);
  await page.waitForSelector(eHourSelector);
  await page.select(monthSelector, '10');
  await page.select(dateSelector, '30');
  await page.select(sHourSelector, '9');
  await page.select(eHourSelector, '21');
  const purposeSelector = '#purposeRadio';
  await page.waitForSelector(purposeSelector);
  await page.click(purposeSelector);
  const searchButtonSelector = '#srchBtn';
  await page.waitForSelector(searchButtonSelector);
  console.log(4);
  await page.click(searchButtonSelector);
  console.log(5);

  // 空き状況画面
  await page.waitFor(2000);
  console.log(await page.content())
  var names = [];
  const result = await page.evaluate((names) => {
    var contents = document.querySelectorAll('#bnamem');
    console.log(contents);
    for (element in contents) {
      var name = element.innerText;
      names.push(name);
    }
    return names;
  }, names);
  console.log(result);

  // // 検索
  // const found = await page.evaluate(() => window.find("your_text"));





  // // 目的から選ぶを選択
  // const purposeLinkSelector = '#tabs > ul > li.purpose > a';
  // await page.waitForSelector(purposeLinkSelector);
  // await page.click(purposeLinkSelector);
  // // 目的から選ぶを選択
  // const outdoorSportsLinkSelector = '#radioPurposeLarge04';
  // await page.waitForSelector(outdoorSportsLinkSelector);
  // await page.click(outdoorSportsLinkSelector);
  // const targetCategorySelector = '#checkPurposeMiddle406';
  // await page.waitForSelector(targetCategorySelector);
  // await page.click(targetCategorySelector);
  // const nextPageButtonSelector = '#btnSearchViaPurpose';
  // await page.waitForSelector(nextPageButtonSelector);
  // await page.click(nextPageButtonSelector);
  // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  // // 施設選択画面
  // console.log(await page.content());
  // const locationSelector1 = '#checkShisetsu112101';
  // await page.waitForSelector(locationSelector1);
  // await page.click(locationSelector1);
  // const locationSelector2 = '#checkShisetsu112102';
  // await page.waitForSelector(locationSelector2);
  // await page.click(locationSelector2);
  // nextPageButtonSelector = '#btnNext';
  // await page.waitForSelector(nextPageButtonSelector);
  // await page.click(nextPageButtonSelector);
  // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

  // // 日付選択画面


  // // 結果画面



  await browser.close();
})();