describe('Dice first test', () => {

    it('find elements', async () => {
        //поиск заголовка
        const titleText = await $('//android.widget.TextView[@text="Tanya\'s Dice Roller"]');
        //await titleText.waitForDisplayed({ timeout: 5000 });
        await expect(titleText).toBeDisplayed();

    });

    it('test prob', async () => {

        // нажать кнопку roll
        const buttonRoll = await $('id:com.example.tkontsevich.diceroller:id/roll_button'); // Ищем элемент по его resource-id
        await expect(buttonRoll).toBeDisplayed(); // Проверяем, что элемент отображается
        await buttonRoll.click(); // Кликаем по элементу

        // появление картинки кубик
        const diceImage = await $('id:com.example.tkontsevich.diceroller:id/dice_image'); // Ищем элемент по его resource-id
        await expect(diceImage).toBeDisplayed(); // Проверяем, что элемент отображается

        // нажать несколько раз на кнопку roll
        const inputButton = await $('id:com.example.tkontsevich.diceroller:id/roll_button'); // Ищем элемент по его resource-id
        await expect(inputButton).toBeDisplayed(); // Проверяем, что элемент отображается
        await inputButton.click(); // Кликаем по элементу
        await inputButton.click(); // Кликаем по элементу        
        await inputButton.click();
        await inputButton.click();
        await inputButton.click();
        await inputButton.click();

        // // Открытие меню и выход
        // const menuButton = await $('~00000000-0000-000d-7fff-ffff0000007e');
        // await menuButton.click();

        // const logoutButton = await $('~00000000-0000-000d-7fff-ffff00000097');
        // await logoutButton.click();
    });

    // after(async () => {
    //     await driver.deleteSession();
    // });
});