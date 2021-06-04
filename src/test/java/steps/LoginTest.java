package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {
	
	ChromeDriver driver;
	
	@Given("launch chormeBrowser and load url")
	public void launchChormeBrowserAndLoadUrl() {
		
		System.setProperty("webdriver.chrome.driver","E:\\SeleniumSoft\\chromedriver_win32\\chromedriver.exe");
		
		 driver=new ChromeDriver();
		
		driver.get("http://www.leaftaps.com/opentaps/control/main");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}

	@Given("enter userName as DemoSalesManager")
	public void enterUserNameAsDemoSalesManager() {
		driver.findElementById("username").sendKeys("DemoSalesManager");
	    
	}

	@Given("enter password as crmsfa")
	public void enterPasswordAsCrmsfa() {
		driver.findElementById("password").sendKeys("crmsfa");
	}

	@When("click the login button")
	public void clickTheLoginButton() {
		driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("It is navigate homepage")
	public void itIsNavigateHomepage() {
	   System.out.println(driver.getTitle());
	}

	@Then("click the logout button")
	public void clickTheLogoutButton() {
		driver.findElementByClassName("decorativeSubmit").click();
	}
	
	@Then("close browser")
	public void closeBrowser() {
		driver.close();
	}
	
	@Given("enter userName as Zimam")
	public void enterUserNameAsZimam() {
		driver.findElementById("username").sendKeys("Mamun");
	}

	@Then("It is navigate samepage")
	public void itIsNavigateSamepage() {
	   System.out.println(driver.getTitle());
	}

	@Then("verify error massage")
	public void verifyErrorMassage() {
	   String errormasg = driver.findElementById("errorDiv").getText();
	if(errormasg.contains("The Following Errors")) {
		System.out.println("Error massage matched");		
	}else {
		System.out.println("Error massage not matched");
	}
	
	
	
	}
}
