# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Contact.spec.js >> Contact Formulário sem login
- Location: Contact.spec.js:4:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\Silvana Duarte\Documentos\testdoc'
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]: EN
  - generic [ref=e51]:
    - heading "Contact" [level=3] [ref=e52]
    - generic [ref=e54]:
      - generic [ref=e55]:
        - generic [ref=e57]:
          - generic [ref=e58]: First name
          - textbox "First name" [ref=e59]:
            - /placeholder: Your first name *
            - text: Test
        - generic [ref=e61]:
          - generic [ref=e62]: Last name
          - textbox "Last name" [ref=e63]:
            - /placeholder: Your last name *
            - text: Test01
        - generic [ref=e64]:
          - generic [ref=e65]: Email address
          - textbox "Email address" [active] [ref=e66]:
            - /placeholder: Your email *
            - text: Test01@email.com
      - generic [ref=e67]:
        - generic [ref=e69]:
          - generic [ref=e70]: Subject
          - combobox "Subject" [ref=e71]:
            - option "Customer service" [selected]
            - option "Webmaster"
            - option "Return"
            - option "Payments"
            - option "Warranty"
            - option "Status of my order"
        - generic [ref=e72]:
          - generic [ref=e73]: Message *
          - textbox "Message *" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]: Attachment
          - generic [ref=e78]:
            - button "Attachment" [ref=e79] [cursor=pointer]
            - generic [ref=e80]:
              - text: Only files with the
              - strong [ref=e81]: txt
              - text: extension are allowed, and files must be 0kb.
        - button "Send" [ref=e83] [cursor=pointer]
  - contentinfo [ref=e85]:
    - generic [ref=e86]:
      - text: This is a DEMO application (
      - link "GitHub repo" [ref=e87] [cursor=pointer]:
        - /url: https://github.com/testsmith-io/practice-software-testing
      - text: ), used for software testing training purpose. |
      - link "Privacy Policy" [ref=e88] [cursor=pointer]:
        - /url: /privacy
      - text: "| Banner photo by"
      - link "Barn Images" [ref=e89] [cursor=pointer]:
        - /url: https://unsplash.com/@barnimages
      - text: "on"
      - link "Unsplash" [ref=e90] [cursor=pointer]:
        - /url: https://unsplash.com/photos/t5YUoHW6zRo
      - text: .
    - generic [ref=e91]: v2.4 | Built 2026-08-22 | Angular 20.0.5
  - button "Open chat" [ref=e93] [cursor=pointer]
  - button "Show live shop activity" [ref=e97] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { login } from './login'
  3  | 
  4  | test('Contact Formulário sem login', async ({ page }) => {
  5  |     await page.goto("https://practicesoftwaretesting.com/")
  6  |     await page.locator('[data-test="nav-contact"]').click()
  7  |     await page.locator('[data-test="first-name"]').fill("Test")
  8  |     await page.locator('[data-test="last-name"]').fill("Test01")
  9  |     await page.locator('[data-test="email"]').fill("Test01@email.com")
  10 |     await page.locator('[data-test="subject"]').selectOption("Customer service")
> 11 | await page.locator('[data-test="attachment"]').setInputFiles("C:/Users/Silvana Duarte/Documentos/testdoc")
     |  ^ Error: ENOENT: no such file or directory, stat 'C:\Users\Silvana Duarte\Documentos\testdoc'
  12 |     await page.locator('[data-test="message"]').fill("testdoc")
  13 |     await page.locator('[data-test="contact-submit"]').click()
  14 | })
```