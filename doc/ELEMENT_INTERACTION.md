# **TEXT**

## **setValue()**

```javascript
get password() {
    return $("#password");
}
```

Method to apply using this selector:

```javascript
async fillPassword(password: string) {
    await this.password.setValue(password);
}
```

Call the method within in the test:

```javascript
import FormPage from "../pageobjects/form.page.js";

describe("auth form", () => {
    it("should deny access with wrong creds", async () => {
        await FormPage.fillPassword("bar");
    });
});
```

---

# **EXPECT:** -> .toHaveTextContaining()

## **We can work on it in two ways:**

_OPTION 1:_ From selector as a web element

```javascript
class FormPage extends Page {
    get flash() {
        return $("#flash");
    }
}
```

Call the selector within in the test:

```javascript
describe("auth form", () => {
    it("should deny access with wrong creds", async () => {
        await expect(FormPage.flash).toHaveTextContaining(
            "Your username is invalid!"
        );
    });
```

_OPTION 2:_ Using the selector as a web element in a method and call it within the test:

```javascript
class FormPage extends Page {
    get flash() {
        return $("#flash");
    }
}
```

Method to apply using this selector:

```javascript
class FormPage extends Page {
    get flash() {
        return $("#flash");
    }

    async checkFashMessage(obtainedMessage: string) {
        await expect(this.flash).toHaveTextContaining(obtainedMessage);
    }
}

export default new FormPage();
```

Call the selector within in the test:

```javascript
import FormPage from "../pageobjects/form.page.js";

describe("auth form", () => {
    it("should deny access with wrong creds", async () => {
        await FormPage.checkFashMessage("Your username is invalid!");
});
```

---

# **WAIT**

## **waitForDisplayed()**

```javascript
class FormPage extends Page {
    get flash() {
        return $("#flash");
    }

    async checkFashMessage(obtainedMessage: string) {
        await this.flash.waitForDisplayed();
        await expect(this.flash).toHaveTextContaining(obtainedMessage);
    }
}

export default new FormPage();
```

---
