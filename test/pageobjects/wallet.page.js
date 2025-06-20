import { generateRandomPasscode } from '../../utils/passcodeHelper';

class WalletPage {
  constructor() {
    this.generatedPasscode = ''; // cache for reuse
  }

  // TODO: need to move to element.properties later
  get createNewWalletButton() { return $('//*[@text="Create new wallet"]'); }
  get skipNotifButton() { return $('//*[@text="Skip, I\'ll do it later"]'); }
  get walletIsReadyMessage() { return $("//*[@text='Brilliant, your wallet is ready!']"); }
  get buyCryptoButton() { return $("//*[@text='Buy Crypto']") }
  get depositCryptoButton() { return $("//*[@text='Deposit Crypto']") }

  async tapCreateNewWalletButton() {
    await this.createNewWalletButton.waitForDisplayed({ timeout: 10000 });
    await this.createNewWalletButton.click();
  }

  async inputPasscode() {
    this.generatedPasscode = generateRandomPasscode();

    for (const digit of this.generatedPasscode) {
      const btn = await $(`//*[@text="${digit}"]`);
      await btn.waitForDisplayed({ timeout: 5000 });
      await btn.click();
    }

    // Wait for confirmation screen to appear
    await browser.pause(1000); // optional delay

    for (const digit of this.generatedPasscode) {
      const btn = await $(`//*[@text="${digit}"]`);
      await btn.waitForDisplayed({ timeout: 5000 });
      await btn.click();
    }
  }

  async skipNotification() {
    await this.skipNotifButton.waitForDisplayed();
    await this.skipNotifButton.click();
  }

  async validateWalletCreated() {
    await this.walletIsReadyMessage.waitForDisplayed({ timeout: 20000 });

    return this.walletIsReadyMessage.isEnabled();
  }

  async validateBuyCryptoButton() {
    await this.buyCryptoButton.waitForDisplayed({ timeout: 20000 });
    await this.buyCryptoButton.isEnabled();
  }

  async validateDepositCryptoButton() {
    await this.depositCryptoButton.waitForDisplayed({ timeout: 20000 });
    await this.depositCryptoButton.isEnabled();
  }
}

module.exports = new WalletPage();
