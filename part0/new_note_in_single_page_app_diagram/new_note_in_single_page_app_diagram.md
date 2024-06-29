# Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write new note and click "Save"

    Note right of browser: With JavaScript the form event is handled and the creation of an object that contains the note information to then be sent

    browser->>browser: The new note is added and the updated list is rendered

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server
    Note right of browser: The page does not reload