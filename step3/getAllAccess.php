<?php


  header('Content-Type: application/json');
  include "data.php";
  $access = $_GET["access"];
  $res = [];
      if ($access == "clevel") {
        $res["fatturato"] = $graphs["fatturato"];
        $res["fatturato_by_agent"] = $graphs["fatturato_by_agent"];
        $res["team_efficiency"] = $graphs["team_efficiency"];
      } elseif ($access == "employee") {
        $res["fatturato"] = $graphs["fatturato"];
        $res["fatturato_by_agent"] = $graphs["fatturato_by_agent"];
      } elseif ($access == "guest") {
        $res["fatturato"] = $graphs["fatturato"];
      }

  echo json_encode($res);
