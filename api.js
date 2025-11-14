table_elem = document.getElementById("main");
navbar_elem = document.getElementById("toolbar");

table = {
    get_data_at : function (x,y){
        return table_elem.rows[x].cells[y].innerText;
    },
    set_data_at : function (x,y,z){
        table_elem.rows[x].cells[y].innerText = z;
    },
    set_style_at : function (x,y,bg,fg){
        table_elem.rows[x].cells[y].style.color = fg ? fg : getRandomHexColor();
        table_elem.rows[x].cells[y].style.backgroundColor = bg ? bg : getRandomHexColor();
    }
}
navbar = {
    add_button : function(x,y){
        a = document.createElement("button");
        a.innerText = x;
        a.onclick = y;
        navbar_elem.appendChild(a);
    },
    add_textfield : function(x,y,search){
        a = document.createElement("input");
        a.innerText = x;
        if (!search){
            navbar_elem.appendChild(a);
            a.addEventListener('change', e => y(e.target.value));
        }else{
            this.add_button("🔍",y);
            navbar_elem.appendChild(a);
        }
        return navbar_elem;
    }
}
