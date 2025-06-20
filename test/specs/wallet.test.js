const { expect } = require('chai');
const WalletPage = require('../pageobjects/wallet.page');

describe('Trust Wallet - Create Wallet Flow (POM)', () => {
  it('should successfully create a new wallet using skip backup', async () => {
    await WalletPage.tapCreateNewWalletButton();
    await WalletPage.inputPasscode();
    await WalletPage.skipNotification();

    const result = await WalletPage.validateWalletCreated();

    expect(result).to.be.true;
  });
});
