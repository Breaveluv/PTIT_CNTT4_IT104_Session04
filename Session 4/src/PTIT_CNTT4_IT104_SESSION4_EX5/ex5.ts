type Person ={
    name:string;
    age:number;
};
type Employee ={
    employeeId:string;
    department:string;
}
type StaffMember=Person&Employee;
function print(staff:StaffMember):void{
    console.log(`Nhân viên ${staff.name}(${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
    
}
const staff: StaffMember={
    name:"Nguyễn Việt Nam",
    age:28,
    employeeId:"Coder",
    department:"Backend"
};
print(staff);