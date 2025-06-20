# mper-wdio-mocha-app-demo

### Install
- NodeJS v22.15.0
- NPM v10.9.2

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
Without Docker
- `npx wdio run ./wdio.conf.js` or
- `npm run test`

Open Allure Reporter (without Docker)
- `allure serve allure-results`
