function print(staff) {
    console.log("Nh\u00E2n vi\u00EAn ".concat(staff.name, "(").concat(staff.age, " tu\u1ED5i), M\u00E3 nh\u00E2n vi\u00EAn: ").concat(staff.employeeId, " - Ph\u00F2ng: ").concat(staff.department));
}
var staff = {
    name: "Nguyễn Việt Nam",
    age: 28,
    employeeId: "Coder",
    department: "Backend"
};
print(staff);
