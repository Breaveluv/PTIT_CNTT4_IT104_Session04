interface Student{
    studentId:string;
    name:string;
    email:string;
    hasCompleted: boolean;
    finalScore?:number;
}

interface Course {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean;
}

interface CourseManager {
    schoolName: string;
    year: number;
    courses: Course[];
}
function getCompletedStudents(course: Course): Student[] {
    return course.students.filter(student => student.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
    const completedStudents = getCompletedStudents(course);
    const scores = completedStudents
        .map(student => student.finalScore)
        .filter(score => score !== undefined) as number[];
    
    return scores.length > 0 ? scores.reduce((a, b) => a + b) / scores.length : null;
}

function printCourseReport(manager: CourseManager): void {
    manager.courses.forEach(course => {
        const completed = getCompletedStudents(course).length;
        const total = course.students.length;
        const avgScore = calculateAverageScore(course) ?? 'N/A';
        
        console.log(`Khoa: ${course.title} (GV: ${course.instructor})`);
        console.log(`- Tong hoc vien: ${total}`);
        console.log(`- Hoan thanh: ${completed} hoc vien`);
        console.log(`- Trung binh điem: ${avgScore}`);
        console.log(`- Trang thai: ${course.isActive ? 'DANG MO' : 'DA DONG'}`);
        console.log();
    });
}
const students1: Student[] = [
    { studentId: "1", name: "Nguyen Van A", email: "a@example.com", hasCompleted: true, finalScore: 8.5 },
    { studentId: "2", name: "Tran Thi B", email: "b@example.com", hasCompleted: false }
];
const students2: Student[] = [
    { studentId: "3", name: "Le Van C", email: "c@example.com", hasCompleted: false }
];
const students3:Student[] =[
    {
        studentId:'3',
        name: "Do Thi D",
        email:"d@example.com",
        hasCompleted:true
    }
]
const courses: Course[] = [
    { courseId: "1", title: "TypeScript Co Ban", instructor: "Nguyen Van E", students: students1, isActive: true },
    { courseId: "2", title: "HTML & CSS", instructor: "Tran Thi M", students: students2, isActive: false },
    { courseId:"3",title:"Game", instructor:"Tran van C", students:students3, isActive:true}
];

const manager: CourseManager = { schoolName: "Example School", year: 2025, courses };
printCourseReport(manager);

