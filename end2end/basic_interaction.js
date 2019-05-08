import { Selector } from 'testcafe';

fixture`Getting Started`.page`https://ndcmn-dev.azurewebsites.net/`;

test('Open page', async t => {
  await t
    .click('button')

    .expect(Selector('span').innerText)
    .contains('0');
});

test('Open page and increment', async t => {
  await t

    .click(Selector('button').withText('Start new session'))
    .wait(200)
    .click(Selector('button').withText('+'))
    .click(Selector('button').withText('+'))
    .expect(Selector('span').innerText)
    .eql('2');
});

test('Open page, increment and decrement', async t => {
  await t

    .click(Selector('button').withText('Start new session'))
    .wait(200)
    .click(Selector('button').withText('+'))
    .click(Selector('button').withText('+'))
    .click(Selector('button').withText('+'))
    .click(Selector('button').withText('+'))
    .click(Selector('button').withText('-'))
    .click(Selector('button').withText('-'))
    .click(Selector('button').withText('-'))
    .expect(Selector('span').innerText)
    .eql('1');
});
