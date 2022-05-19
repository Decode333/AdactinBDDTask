package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"C:\\Users\\NITHIN RAJ E\\eclipse-workspace\\AdactinBDDTask\\src\\test\\resources\\adactintask.feature" }, plugin = {
				"html:C:\\Users\\NITHIN RAJ E\\eclipse-workspace\\AdactinBDDTask\\target" }, monochrome = true, snippets = SnippetType.CAMELCASE, glue = {
						"org.stepdef" })
public class TestRunner {

}
//glue= {"org.stepdef"}, plugin= {"html:C:\\Users\\NITHIN RAJ E\\eclipse-workspace\\AdactinBDDTask\\target"},monochrome = true, snippets = SnippetType.CAMELCASE,