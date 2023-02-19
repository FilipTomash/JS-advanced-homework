const BASE_URL = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

async function callStudents(url) {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    let averageGradeAboveThree = data.filter(function (student) { return student.averageGrade > 3 });
    let namesOfStudents = averageGradeAboveThree.map(function (students) { return students.firstName });
    console.log(`
    ***********************************************
        STUDENTS WITH AVERAGE GRADE ABOVE 3!

    The names of the students with an average grade above 3 are:
     ${namesOfStudents}.`,
        averageGradeAboveThree,
        "***************************************************");
    let femaleStudendsGradeFive = data.filter(student => student.gender === "Female" && student.averageGrade === 5);
    let nameOfFemaleStudents = femaleStudendsGradeFive.map(students => students.firstName);
    console.log(`
     ***********************************************
         FEMALE STUDENTS WITH AVERAGE GRADE 5!
 
     The names of the female students with an average grade of 5 are:
      ${nameOfFemaleStudents}.`,
        femaleStudendsGradeFive,
        "***************************************************");

    let maleStudentsSkopje18yOld = data.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18);
    let fullNamesMaleStudents = maleStudentsSkopje18yOld.map(students => `${students.firstName} ${students.lastName}`);
    console.log(`
     ***********************************************
         MALE STUDENTS FROM SKOPJE ABOVE 18!
 
     The full names of the male students that live in Skopje and are over 18 years old are:
      ${fullNamesMaleStudents}.`,
        maleStudentsSkopje18yOld,
        "***************************************************");
    let femaleStudentsOver24y = data.filter(student => student.gender === "Female" && student.age > 24);
    let avrgGradeFemale24y = femaleStudentsOver24y.map(student => student.averageGrade);
    console.log(avrgGradeFemale24y);
    console.log(`
     ***********************************************
         AVERAGE GRADES OF FEMALE STUDENTS OVER 24!
 
     The average grades of all the female students that are over 24 years old are:
      ${avrgGradeFemale24y}.`,
        femaleStudentsOver24y,
        "***************************************************");
    let maleStudentsBGrade2 = data.filter(student => student.gender === "Male" && student.firstName.indexOf("B") === 0 && student.averageGrade > 2);
    let namesOfStudentsB = maleStudentsBGrade2.map(student => student.firstName);
    console.log(maleStudentsBGrade2);
    console.log(`
     ***********************************************
         MALE STUDENTS WITH NAME STARTING IN B AND AVERAGE GRADE ABOVE 2!
 
     The students with their first name staritng in 'B' and an average grade above 2 are:
      ${namesOfStudentsB}.`,
        maleStudentsBGrade2,
        "***************************************************");
}

callStudents(BASE_URL);