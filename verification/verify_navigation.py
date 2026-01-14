from playwright.sync_api import sync_playwright

def verify_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # 1. Navigate to Home
            page.goto("http://localhost:3000")
            # Use text selector strictly
            page.wait_for_selector("text=Maîtrisez l'Art des Lettres")
            print("Home page loaded")

            # Take screenshot of home
            page.screenshot(path="verification/home.png")

            # 2. Click "Commencer" on the first session card (Lettres Formelles)
            # Find the card with title "Lettres Formelles" and click its "Commencer" link
            # We can use xpath or css to find the button inside the card
            # Or just text=Commencer which might pick the first one
            page.click("a:has-text('Commencer')")

            # 3. Verify Detail Page
            page.wait_for_selector("h1:has-text('Lettres Formelles')")
            print("Detail page loaded")

            # Take screenshot of detail
            page.screenshot(path="verification/detail.png")

            # 4. Click Back
            page.click("text=Retour aux sessions")

            # 5. Verify back to Home
            page.wait_for_selector("text=Maîtrisez l'Art des Lettres")
            print("Back to home successful")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_navigation()
