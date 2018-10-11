describe('Login', async () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have email input', async () => {
    await waitFor(element(by.id('email'))).toBeVisible()
  });

  it('should have password input', async () => {
    await expect(element(by.id('password'))).toBeVisible();
  });

  it('should able to login', async () => {
    await element(by.id('email')).typeText('dean.wilkinson@kutch.org');
    await element(by.id('password')).typeText('secret12');
    await element(by.text('Login')).tap();
  });

  

});