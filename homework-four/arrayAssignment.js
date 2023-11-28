// object array of students
const students = [
    { name: 'Alice', grades: [85, 92, 78, 90]},
    { name: 'Bob', grades: [75, 88, 95, 100]},
    { name: 'Charlie', grades: [60, 72, 68, 74]},
    { name: 'David', grades: [92, 88, 95, 98]},
    { name: 'Eve', grades: [100, 100, 100, 100]},
]

//for each method to display each students name
students.forEach(function(item) {
    let studentNameList = document.getElementsByTagName("p")[0];
    studentNameList.innerHTML += (item.name + " ");
})

//every method to check if students have passed their class >60, boolean
let studentPass = students.every(function( item, i, array){
    // console.log(item.grades);
    // console.log(i);
    // console.log(array);

    if (item.grades >= 60) {
        return item.grades;
    }
})
let didPass = document.getElementsByTagName("p")[1];
didPass.innerHTML += (studentPass);


//some method to check if a student has perfect grades
let perfectScore = students.some(function(value) {
    return value.grades = 100;
})
let perfScore = document.getElementsByTagName("p")[2];
perfScore.innerHTML += (perfectScore);


//filter method to show student with avg grade of 90 or higher
function filterGradeAverage(array, key) {
    return array.filter(function(value) {
        //console.log(key);
        console.log(value.grades);
        let average = (value.grades++) / value.length;
        return average[key];
    })
}
let gradeAvg = document.getElementsByTagName("p")[3];
gradeAvg.innerHTML += (filterGradeAverage( students, "name"));


//reduce method to calculate total number of grades of all students
function totalStudentGrades(array, key)
// let totalGrades = document.getElementsByTagName("p")[5];
// totalGrades.innerHTML += ;