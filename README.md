# Week 1: Toy Problems Prerequisites

This repository contains solutions to the Week 1 assignment for toy problems, focusing on JavaScript fundamentals. The problems cover key programming concepts such as loops, conditional statements, arrays, objects, and functions.

---

## Table of Contents
1. [Overview](#overview)
2. [Challenges](#challenges)
   - [Challenge 1: Student Grade Generator](#challenge-1-student-grade-generator)
   - [Challenge 2: Speed Detector](#challenge-2-speed-detector)
   - [Challenge 3: Net Salary Calculator](#challenge-3-net-salary-calculator)
   - [Extra Practice Questions](#extra-practice-questions)
3. [How to Run the Code](#how-to-run-the-code)
4. [Repository Structure](#repository-structure)
5. [Resources](#resources)

---

## Overview

This assignment includes JavaScript-based solutions to toy problems aimed at reinforcing programming fundamentals. Each solution is written in a modular fashion, with a single file dedicated to each problem for clarity and maintainability.

---

## Challenges

### Challenge 1: Student Grade Generator
Write a function that prompts the user to input student marks (0–100) and outputs the corresponding grade:
- **A**: 80–100  
- **B**: 60–79  
- **C**: 50–59  
- **D**: 40–49  
- **E**: Below 40  

---

### Challenge 2: Speed Detector
Create a program that evaluates the speed of a car. Behavior:
- Speeds below 70: Output `Ok`
- For every 5 km/s over 70, award 1 demerit point.
- If demerit points exceed 12, print `License suspended`.

---

### Challenge 3: Net Salary Calculator
Build a program to calculate an individual’s net salary. It should consider:
- Basic Salary and Benefits as inputs.
- Deductions: **PAYE Tax**, **NHIF**, **NSSF**.
- Outputs: **Gross Salary** and **Net Salary**.

Refer to:
- [KRA Tax Rates](https://www.aren.co.ke/payroll/taxrates.htm)
- [NHIF Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)

---

### Extra Practice Questions

1. **Bubble Sort**  
   Write a function to sort an array of numbers in ascending order using Bubble Sort.  
   Example Input: `[5, 6, 1, 3, 4, 2]`  
   Example Output: `[1, 2, 3, 4, 5, 6]`

2. **Staircase Problem**  
   Write a function to print a step-shaped staircase for a given number of levels.  
   Example Input: `3`  
   Example Output:  

3. **Volume of a Cylinder**  
Write a program to calculate the volume of a cylinder using objects.  
Formula: `V = πr²h`  
- Inputs: radius (r), height (h).  
- Outputs: Volume to 4 decimal places.

---

## How to Run the Code

1. Clone the repository:
```bash
git clone https://github.com/SirAlvinAmisi/week-1-toy-problems.git

cd week-1-toy-problems

node gradeGenerator.js  *example file*

For any queries or clarifications, please reach out to me at < alvomakaya@gmail.com >