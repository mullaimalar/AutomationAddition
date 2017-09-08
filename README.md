# AutomationAddition
Maven project for BDD cucumber framework using page object model, selenium web driver and java for the online website https://www.miniwebtool.com/sum-calculator/  to perform addition

src/resources folder include,
One feature file with two scenarios outline with sharing background under the .
First scenario outline covers positive test cases that add valid numbers and the Second scenario outline covers negative test cases for invalid inputs such as character and symbols

src/test/java folder includes,
The stepdefinition class in the package com.stepdefinition define the steps which calls the page class in the com.pages package to interact with the page elements.
The helper class in the com.helper package include common methods to be shared by the page class methods.
The com.configuration package include the url initialization, driver setup and teardown methods.

you can run the project as maven clean install or junit. 





