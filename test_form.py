def test_successful_submission(self):
    self.driver.find_element(By.ID, "name").send_keys("Aaditya Bhure")
    self.driver.find_element(By.ID, "email").send_keys("test@mail.com")
    self.driver.find_element(By.ID, "phone").send_keys("9876543210")

    Select(self.driver.find_element(By.ID, "course")).select_by_value("DevOps")
    Select(self.driver.find_element(By.ID, "rating")).select_by_value("5")

    self.driver.find_element(By.ID, "feedback").send_keys(
        "This course was very helpful and well structured for learning DevOps concepts."
    )

    self.driver.find_element(By.TAG_NAME, "button").click()

    alert = self.driver.switch_to.alert
    self.assertIn("successfully", alert.text)
    alert.accept()