<?php
// the $_POST[] array will contain the passed in filename and data
// the directory "data" is writable by the server (chmod 777)

// write the file to disk
$subjectID = $_POST['subjectID'];
$data_dir = $_POST['folder'];
$csvData = $_POST['csvStrings'];
$jsonData = $_POST['dataAsJSON'];
$timestr = date('Y-m-d_H:i:s');

//at first, write a backup copy of the json file into backup folder
if(!file_exists($data_dir.'json/')){ mkdir($data_dir.'json/',0777,true);}
for ($i = 0; $i < sizeof($jsonData); $i++) {
      file_put_contents($data_dir.'json/'.$timestr.'_'.$subjectID.'.txt', $jsonData);
};


// then put csvStrings in experiment folder.
if(!file_exists($data_dir.'csv/')){ mkdir($data_dir.'csv/',0777,true);}
for ($i = 0; $i < sizeof($csvData); $i++) {
      file_put_contents($data_dir.'csv/'.$timestr.'_'.$subjectID.'.csv', $csvData);
}
?>
