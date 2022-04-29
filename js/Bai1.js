/**
 * Input: 3 số nguyên
 * Process:
 *  1. Đặt sự kiện có tên hàm arrangeSort()
 *  2. Lấy input var sort1, sort2, sort3 gán giá trị lần lượt 3 số nguyên
 *  3. Tạo biến sortInt gán giá trị 3 số xuất tăng dần
 *  4. Điều kiện
 *      -Nếu sort1< sort2 và sort1< sort3
 *          Trường hợp sort2 < sort3
 *              Thi sortInt.innerHTML = sort1< sort2 < sort3
 *          Trường hợp sort2 > sort3
 *              Thì sortInt.innerHTML = sort1< sort3 < sort2
 *      -Nếu sort2 < sort1 và sort2 <sort3
 *          Trường hợp sort1< sort3
 *              Thi sortInt.innerHTML = sort2 < sort1< sort3
 *          Trường hợp sort1> sort3
 *              Thì sortInt.innerHTML = sort2 < sort3 < sort1
 *      -Nếu sort3 < sort2 và sort3 < sort1
 *          Trường hợp sort2 < sort1
 *              Thi sortInt.innerHTML = sort3 < sort2 < sort1
 *          Trường hợp sort2 >sort1
 *              Thì sortInt.innerHTML = sort3 < sort1< sort2
 *      -Trường hợp khác
 *          Thì sortInt.innerHTML = "Vui lòng nhập số"
 *  5. Thêm thuộc tính onclick cho thẻ button với giá trị là tên hàm
 *      onclick="arrangeSort()"
 *
 * Output: Xuất 3 số theo thứ tự tăng dần
 */

function arrangeSort() {
  var sort1 = +document.getElementById("sort1").value;
  var sort2 = +document.getElementById("sort2").value;
  var sort3 = +document.getElementById("sort3").value;
  var sortInt = document.getElementById("sortInt");
  sortInt.style.display = "block";

  if (sort1 < sort2 && sort1 < sort3) {
    if (sort2 < sort3) {
      sortInt.innerHTML = sort1 + " < " + sort2 + " < " + sort3;
    } else {
      sortInt.innerHTML = sort1 + " < " + sort3 + " < " + sort2;
    }
  } else if (sort2 < sort1 && sort2 < sort3) {
    if (sort1 < sort3) {
      sortInt.innerHTML = sort2 + " < " + sort1 + " < " + sort3;
    } else {
      sortInt.innerHTML = sort2 + " < " + sort3 + " < " + sort1;
    }
  } else if (sort3 < sort1 && sort3 < sort2) {
    if (sort1 < sort2) {
      sortInt.innerHTML = sort3 + " < " + sort1 + " < " + sort2;
    } else {
      sortInt.innerHTML = sort3 + " < " + sort2 + " < " + sort1;
    }
  } else {
    sortInt.innerHTML = "Vui lòng nhập số";
  }
}
