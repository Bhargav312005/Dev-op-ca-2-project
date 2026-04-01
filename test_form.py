import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

class TestForm(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

        import pathlib
        path = pathlib.Path(__file__).resolve().parent
        cls.url = f"file:///{path.as_posix()}/index.html"

    def setUp(self):
        self.driver.get(self.url)
        time.sleep(1)

    def test1_valid(self):
        d=self.driver
        d.find_element(By.ID,"studentName").send_keys("Bhargav Sor")
        d.find_element(By.ID,"emailId").send_keys("test@mail.com")
        d.find_element(By.ID,"mobileNum").send_keys("9876543210")
        Select(d.find_element(By.ID,"department")).select_by_value("CSE")
        d.find_element(By.XPATH,"//input[@value='Male']").click()
        d.find_element(By.ID,"feedback").send_keys("This is a very good feedback with more than ten words present here")
        d.find_element(By.ID,"submitBtn").click()
        time.sleep(1)
        self.assertTrue(d.find_element(By.ID,"successMsg").is_displayed())

    def test2_blank(self):
        d=self.driver
        d.find_element(By.ID,"submitBtn").click()
        time.sleep(1)
        self.assertTrue(d.find_element(By.ID,"nameError").is_displayed())

    def test3_email(self):
        d=self.driver
        d.find_element(By.ID,"emailId").send_keys("wrong")
        d.find_element(By.ID,"submitBtn").click()
        time.sleep(1)
        self.assertTrue(d.find_element(By.ID,"emailError").is_displayed())

    def test4_phone(self):
        d=self.driver
        d.find_element(By.ID,"mobileNum").send_keys("123")
        d.find_element(By.ID,"submitBtn").click()
        time.sleep(1)
        self.assertTrue(d.find_element(By.ID,"mobileError").is_displayed())

    def test5_dropdown(self):
        d=self.driver
        Select(d.find_element(By.ID,"department")).select_by_value("IT")
        val=Select(d.find_element(By.ID,"department")).first_selected_option.get_attribute("value")
        self.assertEqual(val,"IT")

    def test6_gender(self):
        d=self.driver
        d.find_element(By.XPATH,"//input[@value='Male']").click()
        self.assertTrue(d.find_element(By.XPATH,"//input[@value='Male']").is_selected())

    def test7_reset(self):
        d=self.driver
        d.find_element(By.ID,"studentName").send_keys("Test")
        d.find_element(By.ID,"resetBtn").click()
        val=d.find_element(By.ID,"studentName").get_attribute("value")
        self.assertEqual(val,"")

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__=="__main__":
    unittest.main()