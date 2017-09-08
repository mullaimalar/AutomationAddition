Feature: Addition
  As a user
  I want to add two numbers using free online sum calculator
  So that I don't need to calculate myself
 
 Background:
    Given navigate to miniwebtool sum calculator page
   
  Scenario Outline: Add two numbers "<num1>" & "<num2>"   
     When the user perform the request to add "<num1>" & "<num2>" 
    Then the sum of "<num1>" & "<num2>" is "<result>"
    Examples:
    | num1 | num2 | result |
    | 9    |  9   | 18.0   |
    | 2    |  2   | 4.0    |
    
 Scenario Outline: Add two invalid inputs "<input1>" & "<input2>"   
    When the user perform the request to add "<input1>" & "<input2>" 
    Then the sum of invalid inputs "<input1>" & "<input2>" is "<result>"
    Examples:
    | input1 | input2 | result |
    | a      |  c     | Please enter all the numbers separated by comma, space or line break.  |
    | @      |  $     | Please enter all the numbers separated by comma, space or line break.  |   