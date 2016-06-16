<?php
 

$button = $_GET['button'];
 

$programmers = array('Jack Hopkins', 'Rent Cantro', 'Angel Karp');
$engineers = array('John Cave', 'Cava Nate', 'Chappy Boar');
 

$employeetable = array(
  "programmers" => $programmers,
  "engineers" => $engineers,
);

if ($button == "programmers") {
  print json_encode($programmers);
}
else if ($button == "engineers") {
  print json_encode($engineers);
}
else {
  print json_encode($employeetable);
}
 
?>