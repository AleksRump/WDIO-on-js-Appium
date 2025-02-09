describe('android elements test', () => {
    // find element
    it('finde element', async () => {
        const appOption = await $('~App');
        // click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('finde element', async () => {
        // finde element
        const className = await $('android.widget.TextView');
        await expect(className).toHaveText("API Demos");
    });
});