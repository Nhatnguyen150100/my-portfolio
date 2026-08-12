/**
 * Renders the contact-form notification email.
 *
 * Email clients are far stricter than browsers: no flexbox/grid, unreliable
 * `<style>` support, and spotty CSS. So this uses a table-based layout with
 * inline styles and solid-color fallbacks behind every gradient.
 */

type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

// Escape user-supplied text before embedding it in HTML / attributes.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderContactEmail({
  name,
  email,
  message,
}: ContactEmailInput) {
  const firstName = name.trim().split(/\s+/)[0] || name;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeFirstName = escapeHtml(firstName);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

  const sentAt = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Ho_Chi_Minh',
  });
  const year = new Date().getFullYear();
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(
    'Re: your message',
  )}`;

  const text = [
    'New message from your portfolio contact form',
    '',
    `From:    ${name}`,
    `Email:   ${email}`,
    `Sent:    ${sentAt}`,
    '',
    'Message:',
    message,
    '',
    `Reply: ${email}`,
  ].join('\n');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="dark light" />
    <title>New portfolio message</title>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#140f28;border:1px solid #2c2350;border-radius:16px;overflow:hidden;">
            <!-- Accent bar -->
            <tr>
              <td style="height:5px;background-color:#9d5cff;background-image:linear-gradient(90deg,#5dffff 0%,#ae0ca7 100%);font-size:0;line-height:0;">&nbsp;</td>
            </tr>

            <!-- Brand -->
            <tr>
              <td style="padding:28px 32px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:40px;vertical-align:middle;">
                      <div style="width:40px;height:40px;border-radius:10px;background-color:#9d5cff;background-image:linear-gradient(135deg,#5dffff 0%,#ae0ca7 100%);color:#0c0a1a;font-weight:700;font-size:20px;line-height:40px;text-align:center;font-family:${FONT};">N</div>
                    </td>
                    <td style="padding-left:12px;vertical-align:middle;color:#8a83a6;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-family:${FONT};">
                      Portfolio&nbsp;Contact
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td style="padding:20px 32px 0;">
                <h1 style="margin:0;color:#fafafa;font-size:22px;font-weight:700;font-family:${FONT};">You&rsquo;ve got a new message</h1>
                <p style="margin:6px 0 0;color:#8a83a6;font-size:13px;font-family:${FONT};">${sentAt}</p>
              </td>
            </tr>

            <!-- Sender details -->
            <tr>
              <td style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1433;border:1px solid #2c2350;border-radius:12px;">
                  <tr>
                    <td style="padding:16px 18px;border-bottom:1px solid #2a2447;">
                      <div style="color:#8a83a6;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:${FONT};">From</div>
                      <div style="margin-top:4px;color:#fafafa;font-size:16px;font-family:${FONT};">${safeName}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 18px;">
                      <div style="color:#8a83a6;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:${FONT};">Email</div>
                      <div style="margin-top:4px;font-size:16px;font-family:${FONT};">
                        <a href="mailto:${safeEmail}" style="color:#5dffff;text-decoration:none;">${safeEmail}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:22px 32px 0;">
                <div style="color:#8a83a6;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:${FONT};margin-bottom:10px;">Message</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:16px 18px;background-color:#1a1433;border-left:3px solid #9d5cff;border-radius:0 10px 10px 0;color:#e6e3f0;font-size:15px;line-height:24px;font-family:${FONT};">
                      ${safeMessage}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Reply button -->
            <tr>
              <td style="padding:26px 32px 6px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:999px;background-color:#9d5cff;background-image:linear-gradient(90deg,#5dffff 0%,#ae0ca7 100%);">
                      <a href="${replyHref}" style="display:inline-block;padding:12px 28px;color:#0c0a1a;font-weight:700;font-size:15px;text-decoration:none;font-family:${FONT};">Reply to ${safeFirstName} &rarr;</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px 30px;">
                <hr style="border:none;border-top:1px solid #2a2447;margin:0 0 14px;" />
                <p style="margin:0;color:#6f6a86;font-size:12px;line-height:18px;font-family:${FONT};">
                  This message was sent from the contact form on your portfolio website.
                  Just hit reply to respond directly to ${safeFirstName}.
                </p>
              </td>
            </tr>
          </table>

          <p style="margin:16px 0 0;color:#4d4a5e;font-size:11px;font-family:${FONT};">&copy; ${year} Nhat Nguyen</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { html, text };
}
