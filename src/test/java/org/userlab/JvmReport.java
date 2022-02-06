package org.userlab;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generateJvmReport(String jsonPath) {
		// 2.1
		File f = new File(System.getProperty("user.dir") 
				+ "\\src\\test\\resources\\Reports\\JvmReport");

		// 2.2
		Configuration con = new Configuration(f, "facebook");
		con.addClassifications("platform", "windows");
		con.addClassifications("version", "10");
		con.addClassifications("browser", "chrome");
		con.addClassifications("browser version", "94.0");
		con.addClassifications("sprint", "6");

		// 2.3
		List<String> jasonFile = new ArrayList<String>();
		jasonFile.add(jsonPath);
		
		//2.4
		ReportBuilder r=new ReportBuilder(jasonFile, con);
		r.generateReports();
		

	}

}
