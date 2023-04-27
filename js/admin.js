
        function changeManufacturer() {
            var v=document.getElementById('select1').value;
            switch(v){
                case '--Lựa Chọn--':
                    document.getElementById('nsx').value='';
                    document.getElementById('nsx').disabled= true;
                break;    
                case 'Ô Tô':
                    var manu1=document.getElementById('nsx');
                        manu1.innerHTML=`
                        <option>--Lựa Chọn--</option>
                        <option>VF e34</option>
                        <option>Pressident</option>
                        <option>Lux SA2.0</option>
                        <option>Lux A2.0</option>
                        <option>Lux Fadil</option>
                        `
                        manu1.disabled = false
                break;  
                case 'Xe máy điện':
                    var manu2=document.getElementById('nsx');
                        manu2.innerHTML=`
                        <option>--Lựa Chọn--</option>
                        <option>Theon</option>
                        <option>Kalara S</option>
                        <option>Feliz</option>
                        <option>Impes</option>
                        <option>Ludo</option>
                        `
                        manu2.disabled = false
                break;  
            }
        }
        function tinhtoan() {
            var x=document.getElementById('fm_price').value
            var y=document.getElementById('fm_quantity').value
            if(isNaN(x)||isNaN(y)){
                alert('Price or Quantity must be a number!!')
                return
            }
            if(x!='' && y!=''){
                document.getElementById('fm_sum').value=x*y
            }
            if(x=='' || y==''){
                document.getElementById('fm_sum').value=''
            }
        }
        var bigList=[];
        var count=0;
        var check2=0
        function addproduct() {
            var getname=document.getElementById('name').value;
            var getcategoryname=document.getElementById('nsx').value;
            var getprice=document.getElementById('fm_price').value;
            var getquantity=document.getElementById('fm_quantity').value;
            var getmanu=document.getElementById('select1').value;
            if(getname==''|| getcategoryname==''|| getprice==''|| getquantity==''|| getmanu==''){
                alert('Please fill all forms!!');
                return
            }
            if(isNaN(getprice)||isNaN(getquantity)){
                alert('Price or Quantity must be a number!!')
                return
            }
            if(getcategoryname=='--Select--'){
                alert('Please choose your category name!!')
                return
            }
            if(count==0){
                var node = document.createElement("TH");                                                     
                document.getElementById("headtable").appendChild(node);
                var node1 = document.createElement("TH");                                                     
                document.getElementById("headtable").appendChild(node1);
                count++;
            }
            var smallList={
                listname: getname,
                listcategoryname: getcategoryname,
                listprice: getprice,
                listquantity: getquantity,
                listmanu: getmanu
            }
            if(position==-1){
                add(smallList)
            }
            else{
                bigList[position]=smallList;
                position=-1;
                document.getElementById('btn_register').innerHTML='Thêm'
                display()
                //Showdatasaved()
            }
            check2++
        }
        function display() {
            var m=document.getElementById('bodytable')
            m.innerHTML=''
            for(i=0;i<bigList.length;i++){
                var smallList=bigList[i]
                console.log(smallList)
                m.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${smallList.listname}</td>
                    <td>${smallList.listcategoryname}</td>
                    <td>${smallList.listprice}</td>
                    <td>${smallList.listquantity}</td>
                    <td>${smallList.listmanu}</td>
                    <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Chỉnh sửa</div></td>
                    <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Xoá</div></td>
                </tr>
                `
                localStorage.setItem('soluong',i+1)
                localStorage.setItem('ten'+i,smallList.listname)
                localStorage.setItem('tensanpham'+i,smallList.listcategoryname)
                localStorage.setItem('giasanpham'+i,smallList.listprice)
                localStorage.setItem('soluongsanpham'+i,smallList.listquantity)
                localStorage.setItem('hangsanpham'+i,smallList.listmanu)
            }
        }
        var countcheck=0   
        var countcheck1=0      
        function add(smallList) {
            bigList.push(smallList)
            var m=document.getElementById('bodytable')
                m.innerHTML+=`
                <tr>
                    <td>${bigList.length}</td>
                    <td>${smallList.listname}</td>
                    <td>${smallList.listcategoryname}</td>
                    <td>${smallList.listprice}</td>
                    <td>${smallList.listquantity}</td>
                    <td>${smallList.listmanu}</td>
                    <td><div onclick="Edit(${bigList.length -1})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Chỉnh sửa</div></td>
                    <td><div onclick="Delete(${bigList.length -1})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Xoá</div></td>
                </tr>
                `
                if(localStorage.getItem('soluong')<1){
                    localStorage.setItem('soluong',bigList.length)
                    localStorage.setItem('ten'+(bigList.length-1),smallList.listname)
                    localStorage.setItem('tensanpham'+(bigList.length-1),smallList.listcategoryname)
                    localStorage.setItem('giasanpham'+(bigList.length-1),smallList.listprice)
                    localStorage.setItem('soluongsanpham'+(bigList.length-1),smallList.listquantity)
                    localStorage.setItem('hangsanpham'+(bigList.length-1),smallList.listmanu)
                    countcheck++
                   countcheck1++
                    return
                }   
                if(localStorage.getItem('soluong')!=0){
                    if(countcheck1!=0){
                        var dem=parseInt(localStorage.getItem('soluong'))
                        localStorage.setItem('soluong',dem+countcheck)
                        localStorage.setItem('ten'+(dem+countcheck-1),smallList.listname)
                        localStorage.setItem('tensanpham'+(dem+countcheck-1),smallList.listcategoryname)
                        localStorage.setItem('giasanpham'+(dem+countcheck-1),smallList.listprice)
                        localStorage.setItem('soluongsanpham'+(dem+countcheck-1),smallList.listquantity)
                        localStorage.setItem('hangsanpham'+(dem+countcheck-1),smallList.listmanu)
                    }else{
                        var dem=parseInt(localStorage.getItem('soluong'))
                        localStorage.setItem('soluong',dem+1)
                        localStorage.setItem('ten'+(dem),smallList.listname)
                        localStorage.setItem('tensanpham'+(dem),smallList.listcategoryname)
                        localStorage.setItem('giasanpham'+(dem),smallList.listprice)
                        localStorage.setItem('soluongsanpham'+(dem),smallList.listquantity)
                        localStorage.setItem('hangsanpham'+(dem),smallList.listmanu)
                    }
                    return
                }
        }

        function resetall() {
            document.getElementsByTagName('form')[0].reset()
            document.getElementById('nsx').value='';
            document.getElementById('nsx').disabled=true;
        }
        var position=-1;
        function Edit(index) {
            position=index;
            var smallList= bigList[index];
            console.log(smallList)
            document.getElementById('name').value=smallList.listname;
            document.getElementById('fm_price').value=smallList.listprice;
            document.getElementById('fm_quantity').value=smallList.listquantity;
            document.getElementById('select1').value=smallList.listmanu;
            changeManufacturer()
            document.getElementById('nsx').value=smallList.listcategoryname;
            document.getElementById('btn_register').innerHTML='Cập nhật'
        }
        function Delete(index) {
            var m=document.getElementById('bodytable')
            m.innerHTML=''
            bigList.splice(index,1)
            for(i=0;i<bigList.length;i++){
                localStorage.removeItem('ten'+i)
                localStorage.removeItem('tensanpham'+i)
                localStorage.removeItem('giasanpham'+i)
                localStorage.removeItem('soluongsanpham'+i)
                localStorage.removeItem('hangsanpham'+i)
            }
           
            for(i=0;i<bigList.length;i++){
                var smallList=bigList[i]
                localStorage.setItem('soluong',bigList.length)
                localStorage.setItem('ten'+i,smallList.listname)
                localStorage.setItem('tensanpham'+i,smallList.listcategoryname)
                localStorage.setItem('giasanpham'+i,smallList.listprice)
                localStorage.setItem('soluongsanpham'+i,smallList.listquantity)
                localStorage.setItem('hangsanpham'+i,smallList.listmanu)
                m.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${smallList.listname}</td>
                    <td>${smallList.listcategoryname}</td>
                    <td>${smallList.listprice}</td>
                    <td>${smallList.listquantity}</td>
                    <td>${smallList.listmanu}</td>
                    <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Chỉnh sửa</div></td>
                    <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Xoá</div></td>
                </tr>
                `
                countcheck--
            }
           
            if(bigList.length==0){
                var list = document.getElementById("headtable");
                list.removeChild(list.childNodes[6]);
                list.removeChild(list.childNodes[6]);
                count=0
            }
        }
        var check1=0
        function Showdatasaved() {
            if(localStorage.getItem('soluong')<1){
                alert('No data saved!!')
                return
            }
            if(count==0){
                var node = document.createElement("TH");                                                     
                document.getElementById("headtable").appendChild(node);
                var node1 = document.createElement("TH");                                                     
                document.getElementById("headtable").appendChild(node1);
                count++;
            }
            if(check1==0){
                if(bigList.length==0){
                    for(i=0;i<localStorage.getItem('soluong');i++){
                        var smallList={
                            listname: localStorage.getItem('ten'+i),
                            listcategoryname: localStorage.getItem('tensanpham'+i),
                            listprice: localStorage.getItem('giasanpham'+i),
                            listquantity: localStorage.getItem('soluongsanpham'+i),
                            listmanu: localStorage.getItem('hangsanpham'+i)
                        }
                        bigList.push(smallList)
                    }
                    for(i=0;i<bigList.length;i++){
                        var m=document.getElementById('bodytable')
                        m.innerHTML+=`
                        <tr>
                            <td>${i+1}</td>
                            <td>${bigList[i].listname}</td>
                            <td>${bigList[i].listcategoryname}</td>
                            <td>${bigList[i].listprice}</td>
                            <td>${bigList[i].listquantity}</td>
                            <td>${bigList[i].listmanu}</td>
                            <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Chỉnh sửa</div></td>
                            <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Xoá</div></td>
                        </tr>
                        `
                    }
                }
                else{
                    var x=localStorage.getItem('soluong')-bigList.length
                    for(i=0;i<x;i++){
                        var smallList={
                            listname: localStorage.getItem('ten'+i),
                            listcategoryname: localStorage.getItem('tensanpham'+i),
                            listprice: localStorage.getItem('giasanpham'+i),
                            listquantity: localStorage.getItem('soluongsanpham'+i),
                            listmanu: localStorage.getItem('hangsanpham'+i)
                        }
                        bigList.push(smallList)
                    }
                    for(i=x-1;i<bigList.length;i++){
                        var m=document.getElementById('bodytable')
                        m.innerHTML+=`
                        <tr>
                            <td>${i+1}</td>
                            <td>${bigList[i].listname}</td>
                            <td>${bigList[i].listcategoryname}</td>
                            <td>${bigList[i].listprice}</td>
                            <td>${bigList[i].listquantity}</td>
                            <td>${bigList[i].listmanu}</td>
                            <td><div onclick="Edit(${i})" style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer;">Edit</div></td>
                            <td><div onclick="Delete(${i})" style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer;">Delete</div></td>
                        </tr>
                        `
                       
                    }
                    for(i=0;i<bigList.length;i++){
                        localStorage.setItem('soluong',bigList.length)
                        localStorage.setItem('ten'+i,bigList[i].listname)
                        localStorage.setItem('tensanpham'+i,bigList[i].listcategoryname)
                        localStorage.setItem('giasanpham'+i,bigList[i].listprice)
                        localStorage.setItem('soluongsanpham'+i,bigList[i].listquantity)
                        localStorage.setItem('hangsanpham'+i,bigList[i].listmanu)
                    }
                }
                
            }else{
                alert('Already show all data saved!!')
                return
            }
        }
        document.getElementById("tt1").innerHTML= bien1;
        document.getElementById("tt2").innerHTML= bien2;
        document.getElementById("tt3").innerHTML= bien3;
        document.getElementById("tt4").innerHTML= bien4;

        function validate3(){
            var u = document.getElementById("username").value;
            var ph = document.getElementById("phone").value;
            var mail= document.getElementById("mail").value;
            var p1 = document.getElementById("passwordcu").value;
            var p2 = document.getElementById("password-new").value;
            if(u==""){
                alert("vui lòng nhập tên!");
                return false;      
            } 
            if((p1=="")||(p1.length<8)){
                alert("vui lòng nhập mật khẩu!");
                return false;
            }
            if (p2==""){
                alert("vui lòng nhập mật khẩu mới!");
                var passold=localStorage.getItem('pass_db')
            }
                if(p1!=""){
                    localStorage.setItem('name_db',u)
                    localStorage.setItem('phone_db',ph)
                    localStorage.setItem('mail_db',mail)
                    localStorage.setItem('passnew_db',p2)
                }
            else alert("mời các bạn nhập đầy đủ thông tin!")
            return true;    
        }

        function myFunction() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          myTable = document.getElementById("myTable");
          tr = myTable.getElementsByTagName("tr");

          for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
        }

        var xValues = ["VF e34", "Pressident", "Lux SA2.O", "Lux A2.0", "Fadil"];
        var yValues = [2, 0, 1, 0, 0];
        var barColors = [
                                "red",
                                "black",
                                "blue",
                                "green",
                                "pulple"
                            ];

        new Chart("myChart", {
                                type: "pie",
                                data: {
                                labels: xValues,
                                datasets: [{
                                backgroundColor: barColors,
                                data: yValues
                                    }]
                                },
                                options: {
                                title: {
                                display: true,
                                    text: "BIỂU ĐỒ Ô TÔ VINFAST BÁN ĐƯỢC"
                                    }
                                }
                            });

