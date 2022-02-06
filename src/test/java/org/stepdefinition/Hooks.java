package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.userlab.UtilityBaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends UtilityBaseClass {

	@Before("@smoke")
	public void smokeScenario() {
		System.out.println("before smoke Scenario================");

	}

	@Before("@sanity")
	public void sanityScenario() {
		System.out.println("before sanity Scenario================");

	}

	@Before("@regression")
	public void regressionScenario() {
		System.out.println("before regression Scenario================");

	}

	@Before(order = 2)
	public void browserMaximized() {
		System.out.println(" browser max");
		browserMaximize();

	}

	@Before(order = 3)
	public void beforeImplicitWait() {
		System.out.println("imp wait\n");
		implictWait();

	}

	@Before(order = 1)
	public void launchTheBrowser() {
		System.out.println("launch browser");
		launchBrowser();

	}

	@After(order = 1)
	public void browserQuit() {

		System.out.println("quit browser\n");
		driver.quit();

	}

	@After(order = 3)
	public void screenshotManual(Scenario s) throws IOException {

		if (s.isFailed()) {
			String name = s.getName();
			String replacedName = name.replace(' ', '_');
			takeSnap(replacedName);
		}

	}

	@After(order = 2)
	public void screenshotAuto(Scenario s) {

		if (s.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);

			s.embed(screenshotAs, "image/png");

		}

	}

	@After("@smoke")
	public void smokeSenario() {

		System.out.println("=================after smoke Senario");

	}

	@After("@sanity")
	public void sanitySenario() {

		System.out.println("=================after sanity Senario");

	}

	@After("@regression")
	public void regressionSenario() {

		System.out.println("=================after regression Senario");

	}

}
