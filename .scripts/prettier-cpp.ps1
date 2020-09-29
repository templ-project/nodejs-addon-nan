
$customArgs = $args

foreach ($ext in "*.cc", "*.h") {
  Get-ChildItem -Path .\app -Filter $ext -Recurse -File -Name | ForEach-Object {
    echo clang-format.exe -style=file $customArgs .\app\$_;
  }
}
