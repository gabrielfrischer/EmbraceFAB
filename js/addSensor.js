var sensor = 1;
function add_fields() {
    sensor++;
    var objTo = document.getElementById('sensor_fileds')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<div class="row"><div class="col s12 center><div><div class="label center" style="text-align: center">Sensor' + sensor +':</div><div class="content center"><span>Position: <input type="text" style="width:200px;" name="width[]" value="" /></span></div></div></div></div>';
    
    objTo.appendChild(divtest)
}