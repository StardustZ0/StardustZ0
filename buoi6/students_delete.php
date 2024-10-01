<?php 
require './libs/students.php';

// Thực hiện xóa
$id = isset($_POST['id']) ? (int)$_POST['id'] : '';
if ($id) {
    // Gọi hàm xóa sinh viên
    delete_student($id);
}

// Trở về trang danh sách
header("Location: students_list.php");
exit; // Đảm bảo không thực hiện thêm mã sau khi chuyển hướng
?>