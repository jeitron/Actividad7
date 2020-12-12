function new_tab_show_callback (){
                                                                                          
    console.log('showing tab +++++ ' + instance_tabs.index)
}



var instance_tabs

function materialize_init_tab(){

// init all component
//M.AutoInit();


// init materialize tab
elem = $('.tabs')

// bug, swipeable let height 50% shorter 
//var options = {swipeable: true, duration: 300}
options = {duration: 600, onShow: new_tab_show_callback}
init_tabs = M.Tabs.init(elem, options);
instance_tabs = M.Tabs.getInstance(elem);








}







$(document).ready(function(){



materialize_init_tab()




});
