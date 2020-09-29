
$customArgs = $args

foreach ($ext in "*.cc", "*.h") {
  Get-ChildItem -Path .\src -Filter $ext -Recurse -File -Name | ForEach-Object {
    echo clang-format.exe -style=file $customArgs .\src\$_;
  }
}
