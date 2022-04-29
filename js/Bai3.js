/**
 * Input:  người dùng nhập 3 số nguyên
 * Process:
 *  1. input var numberA, numberB, numberC
 *  2. Đặt sự kiện có tên hàm findOddEven()
 *  3. Tạo biến var numberA, numberB, numberC lấy id của từng số nguyên
 *  3. Tạo biến reusltIntC gán giá trị số lượng số chẵn lẻ
 *  4. Điều kiện
 *      -Nếu numberA % 2 === 0 && numberB % 2 === 0 && numberC % 2 === 0
 *          Nếu không nhập vào thì rỗng
 *      -Nếu numberA % 2 === 0 && numberB % 2 === 0 && numberC % 2 === 0
 *          Thì resultInt gán giá trị 3 số chẵn - 0 số lẻ
 *      -Nếu numberA % 2 === 0 && numberB % 2 === 0 && numberC % 2 !== 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 *      -Nếu numberA % 2 === 0 && numberB % 2 !== 0 && numberC % 2 === 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 *      -Nếu numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 === 0
 *          Thì resultInt gán giá trị 2 số chẵn - 1 số lẻ
 *      -Nếu numberA % 2 !== 0 && numberB % 2 !== 0 && numberC % 2 === 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 *      -Nếu numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 !== 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 *      -Nếu numberA % 2 === 0 && numberB % 2 !== 0 && numberC % 2 !== 0
 *          Thì resultInt gán giá trị 1 số chẵn - 2 số lẻ
 *      -Nếu numberA % 2 !== 0 && numberB % 2 !== 0 && numberC % 2 !== 0
 *          Thì resultC gán giá trị 0 số chẵn - 3 số lẻ
 *      Trường hợp khác
 *          resultC gán gía trị "vui lòng nhập số"
 * Output: Xuất ra số lượng số chẵn và số lẻ
 */
function findOddEven() {
  var numberA = +document.getElementById("numberA").value;
  var numberB = +document.getElementById("numberB").value;
  var numberC = +document.getElementById("numberC").value;
  var resultC = document.getElementById("resultC");
  resultC.style.display = "block";
  if (numberA % 2 === 0 && numberB % 2 === 0 && numberC % 2 === 0) {
    resultC.innerHTML = "rỗng";
  } else if (numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 === 0) {
    resultC.innerHTML = "3 số chẵn - 0 số lẻ";
  } else if (numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 === 0) {
    resultC.innerHTML = "2 số chẵn - 1 số lẻ";
  } else if (numberA % 2 === 0 && numberB % 2 !== 0 && numberC % 2 === 0) {
    resultC.innerHTML = "2 số chẵn - 1 số lẻ";
  } else if (numberA % 2 === 0 && numberB % 2 === 0 && numberC % 2 !== 0) {
    resultC.innerHTML = "2 số chẵn - 1 số lẻ";
  } else if (numberA % 2 !== 0 && numberB % 2 !== 0 && numberC % 2 === 0) {
    resultC.innerHTML = "1 số chẵn - 2 số lẻ";
  } else if (numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 !== 0) {
    resultC.innerHTML = "1 số chẵn - 2 số lẻ";
  } else if (numberA % 2 === 0 && numberB % 2 !== 0 && numberC % 2 !== 0) {
    resultC.innerHTML = "1 số chẵn - 2 số lẻ";
  } else if (numberA % 2 !== 0 && numberB % 2 !== 0 && numberC % 2 !== 0) {
    resultC.innerHTML = "0 số chẵn - 3 số lẻ";
  } else if (numberA % 2 !== 0 && numberB % 2 === 0 && numberC % 2 === 0) {
    resultC.innerHTML = "2 số chẵn - 1 số lẻ";
  } else {
    resultC.innerHTML = "Vui lòng nhập số";
  }
}
