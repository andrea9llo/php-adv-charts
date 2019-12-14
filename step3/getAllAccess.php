<?php


  header('Content-Type: application/json');
  include "data.php";
  $access = $_GET["access"];
  $res = [];
      if ($access == "clevel") {
        $res[] = $graphs;
      } elseif ($access == "employee") {
        $res["fatturato"] = $graphs["fatturato"];
        $res[] = $graphs["fatturato_by_agent"];
      } elseif ($access == "guest") {
        $res["fatturato"] = $graphs["fatturato"];
      }

  echo json_encode($res);
