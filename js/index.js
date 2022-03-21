/* kiểu dữ liệu
1. Primivate Data
    - Number
    - String
    - Boolean
    - underfined
    - Symbol
2. complex data
- function
- object
*/

/* toán tử (giống vs những ngôn ngữ khác)
- khái niệm truthy và falsy
*/


/* mot so ham build-in
    1. Alert
    2. Console
    3. Confirm: bật 1 hộp thoại confirm
    4. Prompt: tương tự hàm confirm nhưng có thêm ô input
    5. Set timeout: cho 1 hàm chạy sau 1 khoảng thời gian
    6. Set interval: cho 1 hàm chạy liên tục sau 1 khoảng thời gian
*/  

/*
tìm hiểu về hàm (function):
- loại hàm: build-in và tự định nghĩa
- cấu trúc:
1. declaration function:
function name (){
    //code
}
2. expression function:
var name = function () {
    //code
}
3. arrow function

*/

/* object
1. khái  niệm
var object_name = {
    key: 'value',
    ....
}

2. các thao tác với object
- thêm key và value:
object-name.key = 'value'
object-name['key'] = 'value'
- xoá key:
delete object-name.key
- value có thể là 1 function

*/

// object contructor
function User (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var user = User('hieu','nguyen','Avatar');

// object prototype - basic
// thêm thuộc tính vào hàm tạo sau khi hàm tạo được tạo ra
User.prototype.className = 'name'

/* vòng lặp
1. for/in
2. for/of
*/

/* làm việc với mảng
    forEach()
    every()
    some()
    filter()
    map()
    reduce()
- tham số truyền vào là các hàm
*/
var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 500
    },
    {
        id: 2,
        name: 'PHP',
        coin: 800
    },
    {
        id: 3,
        name: 'ruby',
        coin: 320
    },
    {
        id: 4,
        name: 'c++',
        coin: 200
    },
    {
        id: 5,
        name: 'C',
        coin: 100
    },
]
/* reduce */

var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0)

// total là biến tích trữ, course là curent value, 0 là giá trị khởi tạo

/* callback
- là hàm
- được truyền qua đối số
- được gọi lại ( trong hàm nhận đối số)
*/
//ví dụ về callback
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            callback (this[index],index,this);         
            }
        }
}
var courses = ['javascript', 'PHP', 'ruby']

courses.forEach2 (function(course, index, array) {
    console.log(course, index, array);
});

//html dom
//(tuan 2)
/*1. Get element method
- getElementById => return 1 element

- getElementsByClassName => return HTML collection

- getElementsByTagName => return HTML collection

- querySelector => return 1 element

- querySelectorAll => return NodeList

- HTML collection

- document.write

2. dom attribute
- cách thêm attribute vào element:
+ element.(tên attribute của element) = "";
+ element.setAttribute("tên attribute","value attribute");  
- cách get value của attribute:
+ element.getAttribute("tên attribute");

3. innerText (thuộc tính của element Node), textContent
- getter: innerText lấy ra nội dung giống khi nhìn trong trình duyệt, textContent trả giá trị thật trong DOM
- setter: đều thay đổi nội dung trong element Node

4. innerHTML, outerHTML
- innerHTML thêm đc element, attribute node, text node trong 1 element khác; getter cho ra nội dung HTML dạng String trong element được get
- outerHTML ghi đè luôn vào element được dùng để gọi, getter lấy ra nd HTML tính từ element được dùng để gọi
*/
