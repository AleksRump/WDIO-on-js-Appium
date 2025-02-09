
describe('Login and Logout Test', () => {

    it('test swag', async () => {
        // наличие чела   
        const elementXPath = await $('//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[2]');
        await expect(elementXPath).toBeDisplayed();

       
        // Selecting a user and logging in
        const usernameElement = await $('~standard_user');
        await usernameElement.click();

        const loginButton = await $('//android.widget.TextView[@text="LOGIN"]');
        await loginButton.click();

        // Opening the menu and logging out
        const menuButton = await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView');
        await menuButton.click();

        const logoutButton = await $('//android.widget.TextView[@text="LOGOUT"]');
        await logoutButton.click();
    });
     // наличие чела
    it('find elements', async () => {
        const elementXPath = await $('//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[2]');
        await expect(elementXPath).toBeDisplayed();
    });

   
});
