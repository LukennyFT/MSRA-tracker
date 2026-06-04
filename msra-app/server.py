#!/usr/bin/env python3
"""Tiny static server for the MSRA app.

Run it from anywhere:  python3 server.py
Then open http://localhost:8077 in your browser.

Serves the directory this file lives in, so the relative script paths in
index.html (vendor/, data.js, ...) resolve correctly.
"""
import os, http.server, socketserver, functools

APP = os.path.dirname(os.path.abspath(__file__))
PORT = 8077

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=APP)
socketserver.TCPServer.allow_reuse_address = True
print("MSRA app  ->  http://localhost:%d   (serving %s)" % (PORT, APP))
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    httpd.serve_forever()
