package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends UtilityBaseClass {

	@Given("User must be in facebook login page")
	public void user_must_be_in_facebook_login_page() {

		launchUrl("https://www.facebook.com/");
	}

	@When("User enter invalid username and invalid password")
	public void user_enter_invalid_username_and_invalid_password(DataTable d) {
		List<Map<String, String>> asMaps = d.asMaps();
		Map<String, String> map = asMaps.get(0);
		String name = map.get("name");
		String phno = map.get("phno");

		WebElement username = driver.findElement(By.id("email"));
		WebElement password = driver.findElement(By.id("pass"));

		fill(username, name);
		fill(password, phno);
	}

	@When("User click login button")
	public void user_click_login_button() {
		WebElement loginBtn = driver.findElement(By.name("login"));
		loginBtn.click();
	}

	@Then("User must be in invalid login page")
	public void user_must_be_in_invalid_login_page() {
		System.out.println("invalid page");
		System.out.println("Data Table");

	}

	@When("User click forgot password button")
	public void user_click_forgot_password_button() throws InterruptedException {
		WebElement forgotBtn = driver.findElement(By.xpath("//a[text()='Forgot password?']"));
		forgotBtn.click();
		Thread.sleep(3000);
	}

	@When("User enter values to text box")
	public void user_enter_values_to_text_box() {
		WebElement textBox = driver.findElement(By.id("identify_email"));
		fill(textBox, "9876543210");
	}

	@Then("User click search button")
	public void user_click_search_button() {
		WebElement searchBtn = driver.findElement(By.id("did_submit"));
		searchBtn.click();
		System.out.println("forget password");
	}

}
