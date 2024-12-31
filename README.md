# JavaScript Null Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to null value handling. The `foo` function aims to add two numbers but doesn't properly consider all null scenarios, leading to unexpected behavior. The solution provides a robust way to handle null inputs.

## Bug Description

The original `foo` function handles null inputs by returning 0. However, this behavior might not be desired in all situations.  A more robust solution is to explicitly check for null values before performing the addition operation.  Consider the scenario where the intended behavior is to return null when one or both inputs are null.