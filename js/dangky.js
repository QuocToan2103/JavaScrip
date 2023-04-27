function validate() {
    var u= document.getElementById("name").value;
    var uuu= document.getElementById("username").value;
    var uu= document.getElementById("mail").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;

    if(u== "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return false;
    }
    if(uuu== "") {
    alert("Vui lòng nhập tên tài khoản!");
    return false;
    }
    if(uu== "") {
    alert("Vui lòng nhập email!");
    return false;
    }
    if(p1 == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
    var name = localStorage.getItem('username_db');

    if(uuu != "" ){
        if(uuu==name){
            alert("Tài khoản này đã tồn tại rồi. Mời nhập lại ")
            return false;
        }
    
    else if((uuu != "") && (p1 == p2))
        localStorage.setItem('name_db',u);
        localStorage.setItem('username_db', uuu);
        localStorage.setItem('email_db',uu);
        localStorage.setItem('password_db', p1);

        
        alert("Bạn đã đăng ký thành công");
    }                       
    else
        alert("xin hãy điền đúng thông tin");
        return false;
}
function xemtt(){
        var name1=localStorage.getItem("name_db")
        var username1=localStorage.getItem("username_db")
        var mail1=localStorage.getItem("email_db")

        document.getElementById("a1").innerHTML="Họ tên: " + name1
        document.getElementById("a2").innerHTML="Tên tài khoản: " + username1
        document.getElementById("a3").innerHTML="Email: " + mail1
}
