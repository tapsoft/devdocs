<?php

function starts_with($str, $with) {
	return (strtolower(substr($str, 0, strlen($with))) == strtolower($with));
}

function ends_with($str, $with) {
	return (strtolower(substr($str, -strlen($with))) == strtolower($with));
}

function console_log($text = '', $raw = false) {
	global $stdout;
	global $tag;
	
	$method = $_SERVER['REQUEST_METHOD'] or $method = 'GET';

	if (empty($stdout))
		$stdout = fopen("php://stdout", "w");
	if (empty($tag)) {
		$uri = $_SERVER['REQUEST_URI'];
		$query = trim(urldecode(@$_SERVER['QUERY_STRING']), '?');
		$query = preg_split('/&/', $query);
		$query = implode(', ', $query);
		if (!empty($query)) $query = "($query)";
		
		$tag = "$method $uri $query";
		fprintf($stdout, "%s\n", $tag);
	}
	if (!empty($text)) {
		if (!$raw && (strlen($text) > 255 || strpos($text, "\0") !== false))	// binary
			$text = "<binary, ".strlen($text)." bytes>";
		else if (strpos($text, "\n") !== false)
			$text = implode("\n  ", preg_split("/\\n/", $text));
		fprintf($stdout, "  %s\n", rtrim($text));
	}
}

function console_log_var($var) {
	console_log(var_export($var, true), true);
}

console_log();

$uri = $_SERVER['SCRIPT_NAME'];
if (ends_with($uri, ".png")) {
  header("Content-Type: image/png");
  echo file_get_contents(__DIR__.$uri);
  exit;
}
if (ends_with($uri, ".ico")) {
  header("Content-Type: image/ico");
  echo file_get_contents(__DIR__.$uri);
  exit;
}
if (ends_with($uri, ".js")) {
  header("Content-Type: text/javascript");
  echo file_get_contents(__DIR__.$uri);
  exit;
}
if (ends_with($uri, ".json")) {
  header("Content-Type: application/json");
  if (file_exists(__DIR__.$uri)) {
    echo file_get_contents(__DIR__.$uri);
  } else {
    echo file_get_contents(__DIR__."/docs".$uri);
  }
  exit;
}
if (ends_with($uri, ".css")) {
  header("Content-Type: text/css");
  echo file_get_contents(__DIR__.$uri);
  exit;
}
if (ends_with($uri, ".php")) {
  require(__DIR__.$uri);
  exit;
}
if (ends_with($uri, ".html")) {
  header("Content-Type: text/html");
  if ($uri == "/index.html") {
    echo file_get_contents(__DIR__.$uri);
  } else {
    $parts = preg_split("/\//", trim($uri, "\/"), 2);
    $db = json_decode(file_get_contents(__DIR__."/docs/".$parts[0]."/db.json"), true);
    $content = $db[substr($parts[1], 0, -5)];
    echo $content;
  }
  exit;
}
header("Content-Type: text/html");
echo file_get_contents(__DIR__."/index.html");