function validate1() {
  var uu = document.getElementById("username1").value;
  var pu1 = document.getElementById("password1").value;
  if(uu== "") {
  alert("Vui lòng nhập tên!");
    return false;
  }
  if(pu1 == "") {
  alert("Vui lòng nhập mật khẩu!");
    return false;
  }
    var   name=localStorage.getItem('username_db')
    var   pass=localStorage.getItem('password_db')
                                                                                
    if(((uu=="Nguyễn Quốc Toản")&&(pu1=="abc123"))||((uu==name)&&(pu1==pass))){
    alert("Đăng nhập thành công:");location.assign("file:///C:/Users/ADMIN/Downloads/doanjs/index.html"); }
    else{
                               
    alert("Tài khoản hoặc mật khẩu sai, hãy đăng nhập lại!")
    document.getElementById("username1").value="";
    document.getElementById("password1").value="";
    }
    return true;
    }
                    function xemtt(){
                        var name=localStorage.getItem("username_db")
                        var pass=localStorage.getItem("password_db")

                        document.getElementById("d1").innerHTML ="Tài Khoản:" + name
                        document.getElementById("d2").innerHTML="Mật khẩu:" + pass
                    }

  