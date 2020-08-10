{
    "targets": [
        {
            "target_name": "main",
            "sources": ["app/main.cc"],
            "link_settings": {},
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ],
        }
    ]
}