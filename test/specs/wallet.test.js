const { expect } = require('chai');
const WalletPage = require('../pageobjects/wallet.page');

describe('ANDROID Automation Testing - https://trustwallet.com/id', () => {
  it('should successfully register a new wallet using random passcode', async () => {
    await WalletPage.tapCreateNewWalletButton();
    await WalletPage.inputPasscode();
    await WalletPage.skipNotification();
    await WalletPage.validateBuyCryptoButton();
    await WalletPage.validateDepositCryptoButton();
    expect(await WalletPage.validateWalletCreated()).to.be.true;
  });
});
