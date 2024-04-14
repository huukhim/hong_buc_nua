$(function(){
    $("#hong").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });
        }
    });
});

// Lấy các phần tử cần sử dụng
var modal = document.getElementById("myModal");
var btn = document.getElementById("myButton");
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào button, hiển thị popup
btn.onclick = function() {
  modal.style.display = "block";
}

// Khi người dùng nhấn vào dấu x, đóng popup
span.onclick = function() {
  modal.style.display = "none";
}

// Khi người dùng nhấn vào bất kỳ đâu bên ngoài popup, đóng popup
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
