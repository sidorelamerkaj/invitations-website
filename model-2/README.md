# Wedding Invitation

A classy, single-page wedding invitation with envelope animation and optional personalisation via URL query parameters.

## Query parameters

You can personalise the invite by adding query parameters to the URL. The first letter of each value is auto-capitalised (e.g. `mr` becomes `Mr`).

| Parameter | Description | Example |
|-----------|-------------|---------|
| `title` | Guest title (Mr, Miss, Mrs) | `title=Mr` |
| `name` | Guest first name | `name=John` |
| `surname` | Guest surname | `surname=Smith` |
| `event` | Replaces the header tagline (default: "Save the date"). First letter of each word is capitalised. | `event=Our%20Wedding` |

### Examples

- **Personalised guest line**  
  `index.html?title=Mr&name=John&surname=Smith`  
  Shows: *Dear Mr John Smith,* above the main invite message.

- **Custom event name**  
  `index.html?event=Sarah%20%26%20Dan%27s%20Wedding`  
  Shows "Sarah & Dan's Wedding" in the header instead of "Save the date".

- **Full personalisation**  
  `index.html?title=Mrs&name=Jane&surname=Doe&event=Together%20We%20Say%20Yes`  
  Combines a guest line (Dear Mrs Jane Doe,) and a custom header ("Together We Say Yes").

If none of `title`, `name`, or `surname` are provided, the "Dear [guest name]" line is hidden. The header always shows either the `event` value or "Save the date".
