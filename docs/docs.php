<?php

$docs = json_decode(file_get_contents(__DIR__."/docs.json"), true);

foreach ($docs as $slug) {
  //echo "https://devdocs.io/docs/$slug/index.json\r\n";
  //echo "https://documents.devdocs.io/$slug/db.json\r\n";
  echo "$slug \n";
  echo "<a href=\"https://devdocs.io/docs/$slug/index.json\" target=\"_new\">index</a> ";
  echo "<a href=\"https://documents.devdocs.io/$slug/db.json\" target=\"_new\">db</a> ";
  echo "<br/>\n";
}
