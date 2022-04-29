/**
 * Input: 3 cạnh tam giác
 * Process:
 *  1. Lấy input var edgeA, edgeB, edgeC gán giá trị là chiều dài cạnh tam giác
 *  2. Đặt sự kiện có tên hàm edgeType()
 *  3. Tạo biến lấy id của từng cạnh
 *  4. Tạo biến result gán giá trị loại tam giác
 *  5. Điều kiện
 *      -Nếu edgeA === edgeB && edgeB === edgeC
 *      Tam giác đều
 *      -Nếu edgeA === edgeB || edgeA === edgeC || edgeC === edgeB
 *      Tam giác cân
 *      -Nếu edgeA * edgeA === edgeB * edgeB + edgeC * edgeC || edgeB *      edgeB === edgeA * edgeA + edgeC * edgeC || edgeC * edgeC === edgeA *      edgeA + edgeB * edgeB
 *      tam giác vuông
 *      -Trường hợp khác result gán giá trị "Một loại tam giác nào đó"
 *  6. Thêm thuộc tính onclick vào button với giá trị là tên hàm
 *      onclick="edgeType()"
 * Output: Loại tam giác
 */

function edgeType() {
  var edgeA = +document.getElementById("edgeA").value;
  var edgeB = +document.getElementById("edgeB").value;
  var edgeC = +document.getElementById("edgeC").value;
  var result = document.getElementById("result");
  result.style.display = "block";
  if (edgeA === edgeB && edgeB === edgeC) {
    result.innerHTML = "Tam giác đều";
  } else if (edgeA === edgeB || edgeA === edgeC || edgeB === edgeC) {
    result.innerHTML = "Tam giác cấn";
  } else if (
    edgeA * edgeA === edgeB * edgeB + edgeC * edgeC ||
    edgeB * edgeB === edgeA * edgeA + edgeC * edgeC ||
    edgeC * edgeC === edgeA * edgeA + edgeB * edgeB
  ) {
    result.innerHTML = "Tam giác vuông";
  } else {
    result.innerHTML = "Một loại tam giác nào đó";
  }
}
