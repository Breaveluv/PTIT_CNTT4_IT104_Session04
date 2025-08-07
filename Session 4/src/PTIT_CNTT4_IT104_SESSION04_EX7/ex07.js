function processInput(input) {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) {
            var num = parseInt(input);
            console.log(num * num);
        }
        else {
            var letters = input.match(/[a-zA-Z]/g);
            var count = letters ? letters.length : 0;
            console.log("".concat(count, " K\u00ED t\u1EF1 ch\u1EEF c\u00E1i"));
        }
    }
    else if (typeof input === "number") {
        if (input < 2 || !Number.isInteger(input)) {
            console.log("Khong phai so nguyen to");
            return;
        }
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
    }
    else if (typeof input === "boolean") {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
    else {
        console.log("Kiểu dữ liệu không hợp lệ");
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
