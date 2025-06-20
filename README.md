# mper-wdio-mocha-app-demo

### Install
- NodeJS v22.15.0
- NPM v10.9.2

### Framework + Library + Reporter
- WebdriverIO
- Mocha
- Chai
- Appium
- Allure

### How to Setup
Without Makefile
- `npm ci`

With Makefile
- `make ci`

Create .env
- `cp env.sample .env`
```
AVD_NAME=<your_android_emulator_name>
ANDROID_HOME=<your_android_home_path>
```
For ANDROID_HOME, you can run `echo $ANDROID_HOME` to know the full path.

### How to Run
APK file must be inside `apk` folder with name `trustwallet.apk` => `./apk/trustwallet.apk` (.apk size is limited to 100MB only, so we cannot upload on GitHub)

Without Docker
- `npx wdio run ./wdio.conf.js` or
- `npm run test`

Open Allure Reporter (without Docker)
- `allure serve allure-results`
