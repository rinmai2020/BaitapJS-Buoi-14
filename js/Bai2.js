/**
 * Input: các thánh viên trong gia đinh: bố, mẹ, anh trai, em gái
 * Process:
 *  1. Đặt sự kiện có tên hàm greeting
 *  2. Tạo biến member gán giá trị các thành viên
 *  3. Tạo biến robot gán giá trị chào hỏi thành viên được chọn
 *  4. Điều kiện
 *     -Nếu member == "B"
 *       Thì gán giá trị Xin chào bố!
 *     -Nếu member == "M"
 *        Thì gán giá trị Xin chào mẹ!
 *     -Nếu member == "A"
 *        Thì gán giá trị Xin chào anh trai!
 *     -Nếu member == "E"
 *        Thì gán giá trị Xin chào em gái!
 *     Trường hợp khác
 *          Thì gán giá trị Who á du? :))
 *  5. Đặt sự kiên onclick cho thẻ button với giá trị là tên hàm
 *      onclick="greeting()"
 * Output: Đưa ra lời chào phụ hợp khi được chọn các thành viên trong giá đình
 */

function greeting() {
  var member = document.getElementById("familyPeople").value;
  var robot = document.getElementById("robot");
  robot.style.display = "block";
  if (member == "B") {
    robot.innerHTML = "Xin Chào Bố!";
  } else if (member == "M") {
    robot.innerHTML = "Xin Chào Mẹ!";
  } else if (member == "A") {
    robot.innerHTML = "Xin Chào Anh Trai!";
  } else if (member == "E") {
    robot.innerHTML = "Xin Chào Em Gái!";
  } else {
    robot.innerHTML = "Who are u?";
  }
}
