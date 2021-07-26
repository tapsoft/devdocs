<?php

$docs = json_decode(file_get_contents(__DIR__."/docs.json"), true);

foreach ($docs as $slug) {
  @mkdir(__DIR__."/$slug");
  if (!file_exists(__DIR__."/$slug/index.json")) {
    echo "Download: $slug/index.json\n";
    file_put_contents(__DIR__."/$slug/index.json", file_get_contents("https://devdocs.io/docs/$slug/index.json"));
  }
  if (!file_exists(__DIR__."/$slug/db.json")) {
    echo "Download: $slug/db.json\n";
    file_put_contents(__DIR__."/$slug/db.json", file_get_contents("https://documents.devdocs.io/$slug/db.json"));
  }
}

echo "All Done.\n";
