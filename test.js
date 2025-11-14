navbar.add_button("spit_at",function(){console.log(table.get_data_at(0,0))});

let x=0;
let y=0;

navbar.add_textfield("x",function(a){x=a;console.log(table.get_data_at(parseInt(x),parseInt(y)))});
n = navbar.add_textfield("y",function(b){y=b;console.log(table.get_data_at(parseInt(x),parseInt(y)))});
n.style.backgroundColor = "red";
table.set_style_at(0,0,"#000000","#ffffff");
let m = navbar.add_label(table.get_size());
table_elem.addEventListener('input', e =>{
    m.innerText = table.get_size();
    let x;
    if (isNaN(table.get_data_at(0,0))){
        x = 0;
    }else{
        x = parseInt(table.get_data_at(0,0));
    }
    table.set_data_at(0,0,x+1);
});

m2 = navbar.add_label("x");

