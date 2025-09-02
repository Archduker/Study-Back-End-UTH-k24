
// Khai báo 3 biến let/const lưu: tên (string), tuổi (number), làSinhVien (boolean). In ra câu: "Xin chào, tôi là <tên>, <tuổi> tuổi, sinh viên: <true/false>".

const name = "Tran Thanh Thuan"
const years_old = 19
const isStudent = true
const str = `Xin chào, tôi là ${name} ${years_old} tuổi, sinh viên: ${isStudent}`;

console.log(str)

// Tính chu vi và diện tích hình chữ nhật từ width, height (number). Ép kiểu từ string sang number trước khi tính (gợi ý: Number()).

let height = 100;
let width = Number('20');
console.log("\nChiều dài:", height, "\nChiều rộng:", width, "\nChu vi:", height + width, "\nDiện tích:", height * width);

// Viết hàm sum(a, b) trả về tổng; kiểm tra kiểu a, b là number, nếu không trả về 'Invalid input'.

let a = 10;
let b = '20';
let s = function sum(a, b) { return a + b }
if (typeof (s) === "number") {
    console.log(s);
} else {
    console.log('Invalid input')
}

// Viết hàm isEven(n) trả về true nếu n chẵn, ngược lại false. Test với một số giá trị.
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let n = 10;
console.log(`số ${n}` + (isEven(n)) ? "là số chẫn" : "là số lẻ");

// Viết hàm greet(name = 'bạn') trả về 'Hello, <name>!'. So sánh function declaration và arrow function.



Greet();
// Greet1.sayHi()// sẽ lỗi và ko trỏ tới được do Arrow function ko hổt trợ hosting

// Function declaration
function Greet(name = 'Thuận') {
    console.log("Hi my Name:", name)
}

//  Arrow function + Function declaration 
const Greet1 = {
    name: "Thuận",
    sayHi: function () {
        console.log("Hi, I'm " + this.name);
    }
};
// Greet1.sayHi();

// Arrow function + Arrow function
const Greet2 = {
    name: "Thuận",
    sayHi: () => {
        console.log("Hi, I'm " + this.name);
    }
};
Greet2.sayHi(); // (this lấy từ scope ngoài, không phải trong hàm nên ko trỏ tời và)


// Tạo biến points (number). Dùng toán tử 3 ngôi để phân loại: points >= 90: 'A', 70–89: 'B', 50–69: 'C', < 50: 'D'.

let points = 100;

console.log(points >= 90 ? 'A' : points >= 70 ? 'B' : points >= 50 ? 'C' : 'D')

// Tạo biến a = '10', b = 10. So sánh a == b và a === b, giải thích khác biệt và in kết quả.
function B7() {
    let a = '10';
    let b = 10;

    console.log("\n a==b  :", a == b);
    console.log("\na===b: ", a === b);
    // giải thích:
}
B7();
// Viết hàm toBoolean(x) chuyển mọi giá trị về boolean theo JavaScript truthy/falsy và in kết quả với: 0, 1, '', '0', ' ', null, undefined, [], {}, NaN.

function toBoolean(x) {
    return x
}
function B8() {
    let a = 0;
    let b = '';
    let c = null;
    let d = undefined;
    let e = NaN;

    // Các giá trị truthy
    let f = 1;
    let g = '0';
    let h = ' ';
    let i = [];
    let j = {}

    console.log(`Kết quả cho các giá trị falsy:`);
    console.log(`toBoolean(${a}) -> ${toBoolean(a)}`);
    console.log(`toBoolean('${b}') -> ${toBoolean(b)}`);
    console.log(`toBoolean(${c}) -> ${toBoolean(c)}`);
    console.log(`toBoolean(${d}) -> ${toBoolean(d)}`);
    console.log(`toBoolean(${e}) -> ${toBoolean(e)}`);

    console.log(`\nKết quả cho các giá trị truthy:`);
    console.log(`toBoolean(${f}) -> ${toBoolean(f)}`);
    console.log(`toBoolean('${g}') -> ${toBoolean(g)}`);
    console.log(`toBoolean('${h}') -> ${toBoolean(h)}`);
    console.log(`toBoolean(mảng rỗng) -> ${toBoolean(i)}`);
    console.log(`toBoolean(đối tượng rỗng) -> ${toBoolean(j)}`);
} B8();