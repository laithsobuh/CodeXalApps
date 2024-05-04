<?php include "head.php"; ?>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>
<style>
   body {
    padding: 0;
    margin: 0;
}
html, body, #map {
    height: 50vh;
    width: 100vw;
}
.vertical {
    border-left: 5px solid gray;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 27px;
    margin-left: 45px;
    padding-right: 15px;
    height: 20px;
}

input{
    border: 0;
}
</style>

<?php
include "conn.php";
$sql = "select * from providers";
$res = $conn->query($sql);
$rows=[];
while ($row = mysqli_fetch_assoc($res)) {
    $rows[]=$row;
}
?>
<script type='text/javascript'>
<?php
$js_array = json_encode($rows);
echo "var javascript_array = ". $js_array . ";\n";
?>
</script>


<body dir="rtl">

<?php include "searchdiv.php"; ?>



<script>
function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
    return degree*Math.PI/180;
}


javascript_array.forEach(myfunc);

function myfunc(item, index){
    console.log(item);
}


</script>
</body>

<?php include "footer.php"; ?>
