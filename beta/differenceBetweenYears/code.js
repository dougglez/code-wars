
const howManyYears = (date1, date2) => Math.abs(date2.split('/')[0] - date1.split('/')[0]);


// TEST CASES \\
howManyYears('1997/10/10', '2015/10/10'); //18
howManyYears('1990/10/10', '2015/10/10'); //25
howManyYears('2015/10/10', '1990/10/10'); //25
howManyYears('1992/10/24', '2015/10/24'); //23
howManyYears('2018/10/10', '2000/10/10'); //18