package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition2 extends UtilityBaseClass {

	@Given("I must be in fb login page")
	public void i_must_be_in_fb_login_page() {

		launchUrl("https://www.facebook.com/");
	}

	@When("I enter values to emailfiled {string} and passwordfiled {string}")
	public void i_enter_values_to_emailfiled_and_passwordfiled(String emailValue, String passValue) {
		WebElement username = driver.findElement(By.id("email"));

		fill(username, emailValue);

		WebElement password = driver.findElement(By.id("pass"));

		fill(password, passValue);
	}

	@When("I clicked the login button")
	public void i_clicked_the_login_button() {
		WebElement loginBtn = driver.findElement(By.name("login"));
		loginBtn.click();
	}

	@Then("I have validate output and quit browser")
	public void i_have_validate_output_and_quit_browser() {
		System.out.println("validate the output Sc outline");
	}

}
