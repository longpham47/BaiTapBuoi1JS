/**
 * 
 *!   bài 5 tổng 2 chữ số
 * 
 *  ?khối 1 input
 * 
 * number
 * 
 * 
 * 
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * =>  soHangChuc = Math.floor(number/10);
 * =>  soHangDV = (number%10);
 * 
 * 
 * ?khối 3 output
 * 
 * tong
 */

 var number = 47;
 var soHangChuc = 0;
 var soHangDV = 0;
 var tong = 0;
soHangChuc = Math.floor(number/10);
soHangDV = (number%10);
tong = (soHangChuc + soHangDV);
console.log("tổng 2 chữ số :", tong);
