navbar.add_button("spit_at",function(){console.log(table.get_data_at(0,0))});

x = 0;
y=0;

navbar.add_textfield("x",function(x){x=x;console.log(table.get_data_at(parseInt(x),parseInt(y)))});
navbar.add_textfield("x",function(y){y=y;console.log(table.get_data_at(parseInt(x),parseInt(y)))});

table.set_style_at(0,0,"#000000","#ffffff");
