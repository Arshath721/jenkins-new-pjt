package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.userlab.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\Rerun\\fbRerun.txt",
glue = "org.stepdefinition",dryRun = false, monochrome = true, 
strict = true, tags = {"@LoginUsingTable" },
plugin = { "html:src\\test\\resources\\Reports",
			"json:src\\test\\resources\\Reports\\out.json",
			"junit:src\\test\\resources\\Reports\\facebook.xml",
			"rerun:src\\test\\resources\\Rerun\\fbRerun.txt"})

public class TestRerunner {
	@AfterClass
	public static void jvmReportGeneration() {
		JvmReport.generateJvmReport(System.getProperty("user.dir") 
				+ "\\src\\test\\resources\\Reports\\out.json");
	}

}
