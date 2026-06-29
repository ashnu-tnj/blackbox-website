# Credential documents

Drop the verified credential files here so the **Credentials & Compliance**
section can link to them. The expected filenames (referenced in
`data/credentials.ts`) are:

| File to add               | Source document        | Linked from        |
| ------------------------- | ---------------------- | ------------------ |
| `bb-gst-verified.pdf`     | "BB GST Verified.pdf"  | GSTIN credential   |
| `fssai-license.pdf`       | "FSSAI license.pdf"    | FSSAI credential   |
| `ie-code.jpeg`            | "IE Code.jpeg"         | DGFT credential    |

To add or rename, edit the `document` paths in `data/credentials.ts`.
Credentials without a `document` value simply render without a "View document"
link.
